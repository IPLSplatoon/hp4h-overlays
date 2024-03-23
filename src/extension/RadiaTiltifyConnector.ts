import WebSocket from 'ws';
import type NodeCG from '@nodecg/types';
import { Configschema, DonationData } from 'types/schemas';
import { TiltifyApiClient } from './TiltifyApiClient';

interface TiltifyDonationUpdateMessage {
    data: {
        amount: {
            currency: string
            value: string
        }
        id: string
        campaign_id: string
        donor_name: string
        donor_comment: string
    }
    meta: TiltifyMessageMeta<'public:direct:donation_updated'>
}

interface TiltifyFactUpdateMessage {
    data: {
        amount_raised: {
            currency: string
            value: string
        }
        id: string
        goal: {
            currency: string
            value: string
        }
    }
    meta: TiltifyMessageMeta<'public:direct:fact_updated'>
}

type TiltifyMessage = TiltifyDonationUpdateMessage | TiltifyFactUpdateMessage;

interface TiltifyMessageMeta<Type> {
    attempted_at: string
    event_type: Type
    generated_at: string
    id: string
    subscription_source_id: string
    subscription_source_type: string
}

const reconnectionTimeouts = [1000, 2500, 5000, 10000, 25000];
const maxReconnectionCount = 2;
const expectedSocketClosureCode = 4001;

export class RadiaTiltifyConnector {
    private readonly nodecg: NodeCG.ServerAPI<Configschema>;
    private pingTimeout: NodeJS.Timeout | undefined;
    private reconnectionTimeout: NodeJS.Timeout | undefined;
    private socket: WebSocket | undefined;
    private reconnectionCount = 0;
    private donationData: NodeCG.ServerReplicant<DonationData>;
    private tiltifyApiClient: TiltifyApiClient;
    private seenDonations: Set<string>;

    constructor(nodecg: NodeCG.ServerAPI<Configschema>) {
        this.donationData = nodecg.Replicant<DonationData>('donationData');

        if (
            nodecg.bundleConfig?.tiltify?.socketUrl == null
            || nodecg.bundleConfig?.tiltify?.authorization == null
            || nodecg.bundleConfig?.tiltify?.campaignId == null
            || nodecg.bundleConfig?.tiltify?.clientId == null
            || nodecg.bundleConfig?.tiltify?.clientSecret == null
        ) {
            this.donationData.value!.status = 'DISCONNECTED';
            throw new Error('Missing bundle configuration. Tiltify connection is disabled.');
        }

        this.seenDonations = new Set();
        this.tiltifyApiClient = new TiltifyApiClient(
            nodecg.bundleConfig.tiltify.clientId,
            nodecg.bundleConfig.tiltify.clientSecret);
        nodecg.listenFor('reconnectToTiltify', () => {
            this.reconnectionCount = 0;
            this.initSocket();
        });

        this.nodecg = nodecg;
        this.initSocket();
        this.requestCampaignData().catch(e => {
            nodecg.log.error('Failed to request campaign data from Tiltify:', e);
        });
    }

    private async requestCampaignData() {
        const campaign = await this.tiltifyApiClient.getCampaign(this.nodecg.bundleConfig.tiltify!.campaignId);
        this.donationData.value = {
            status: this.donationData.value!.status,
            donationTotal: parseFloat(campaign.data.amount_raised.value),
            donationGoal: parseFloat(campaign.data.goal.value),
            currency: campaign.data.amount_raised.currency
        };
    }

    private initSocket() {
        if (this.reconnectionTimeout != null) {
            clearTimeout(this.reconnectionTimeout);
        }

        this.donationData.value!.status = 'CONNECTING';
        if (this.socket != null) {
            this.socket.close(expectedSocketClosureCode);
        }

        this.socket = new WebSocket(this.nodecg.bundleConfig.tiltify!.socketUrl, {
            headers: {
                Authorization: this.nodecg.bundleConfig.tiltify!.authorization
            }
        });

        this.socket.on('error', err => {
            this.nodecg.log.error('Received error from Tiltify websocket:', err.message ?? err);
        });

        this.socket.on('open', () => {
            this.donationData.value!.status = 'CONNECTED';
            this.nodecg.log.info('Connected to Tiltify websocket');
            if (this.reconnectionTimeout != null) {
                clearTimeout(this.reconnectionTimeout);
            }
            this.reconnectionCount = 0;
            this.heartbeat();
            this.requestCampaignData().catch(e => {
                this.nodecg.log.error('Failed to request campaign data from Tiltify:', e);
            });
        });

        this.socket.on('close', (code, reason) => {
            this.nodecg.log.info('Disconnected from Tiltify websocket. Reason:', reason.toString());
            if (this.pingTimeout) {
                clearTimeout(this.pingTimeout);
            }
            if (code !== expectedSocketClosureCode) {
                this.attemptReconnect();
            } else {
                this.donationData.value!.status = 'DISCONNECTED';
            }
        });

        this.socket.on('ping', () => {
            this.heartbeat();
        });

        this.socket.on('message', data => {
            try {
                const message = JSON.parse((data as Buffer).toString()) as TiltifyMessage;

                if (
                    !message.meta
                    || (message.meta.event_type !== 'public:direct:donation_updated'
                    && message.meta.event_type !== 'public:direct:fact_updated')
                ) {
                    return;
                }

                switch (message.meta.event_type) {
                    case 'public:direct:fact_updated': {
                        const donationTotal = parseFloat((message as TiltifyFactUpdateMessage).data.amount_raised.value);
                        if (
                            (message as TiltifyFactUpdateMessage).data.id === this.nodecg.bundleConfig.tiltify!.campaignId
                            && donationTotal > this.donationData.value!.donationTotal
                        ) {
                            this.donationData.value = {
                                status: this.donationData.value!.status,
                                donationTotal,
                                donationGoal: parseFloat((message as TiltifyFactUpdateMessage).data.goal.value),
                                currency: (message as TiltifyFactUpdateMessage).data.amount_raised.currency
                            };
                        }
                        break;
                    }
                    case 'public:direct:donation_updated': {
                        const id = (message as TiltifyDonationUpdateMessage).data.id;
                        if (
                            (message as TiltifyDonationUpdateMessage).data.campaign_id === this.nodecg.bundleConfig.tiltify!.campaignId
                            && !this.seenDonations.has(id)
                        ) {
                            this.seenDonations.add(id);
                            this.nodecg.sendMessage('donationReceived', {
                                amount: parseFloat((message as TiltifyDonationUpdateMessage).data.amount.value),
                                id
                            });
                        }
                        break;
                    }
                }
            } catch (e) {
                this.nodecg.log.error('Received a message from Tiltify that could not be parsed.');
            }
        });
    }

    private attemptReconnect() {
        if (this.reconnectionCount < maxReconnectionCount) {
            this.donationData.value!.status = 'CONNECTING';
            this.reconnectionCount++;

            if (this.reconnectionCount === 1) {
                this.nodecg.log.info('Tiltify websocket has closed.');
            }
            this.reconnectionTimeout = setTimeout(() => {
                this.nodecg.log.info(`Reconnecting to Tiltify... (Attempt ${this.reconnectionCount})`);
                this.initSocket();
            }, reconnectionTimeouts[this.reconnectionCount - 1] ?? 1000);
        } else {
            this.nodecg.log.warn('Too many reconnection attempts. Tiltify websocket is closed.');
            this.donationData.value!.status = 'DISCONNECTED';
        }
    }

    private heartbeat() {
        if (this.pingTimeout) {
            clearTimeout(this.pingTimeout);
        }

        this.pingTimeout = setTimeout(() => {
            this.socket?.terminate();
        }, 21000);
    }
}
