"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadiaTiltifyConnector = void 0;
const ws_1 = __importDefault(require("ws"));
const TiltifyApiClient_1 = require("./TiltifyApiClient");
const reconnectionTimeouts = [1000, 2500, 5000, 10000, 25000];
const maxReconnectionCount = 2;
const expectedSocketClosureCode = 4001;
class RadiaTiltifyConnector {
    constructor(nodecg) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.reconnectionCount = 0;
        this.donationData = nodecg.Replicant('donationData');
        if (((_b = (_a = nodecg.bundleConfig) === null || _a === void 0 ? void 0 : _a.tiltify) === null || _b === void 0 ? void 0 : _b.socketUrl) == null
            || ((_d = (_c = nodecg.bundleConfig) === null || _c === void 0 ? void 0 : _c.tiltify) === null || _d === void 0 ? void 0 : _d.authorization) == null
            || ((_f = (_e = nodecg.bundleConfig) === null || _e === void 0 ? void 0 : _e.tiltify) === null || _f === void 0 ? void 0 : _f.campaignId) == null
            || ((_h = (_g = nodecg.bundleConfig) === null || _g === void 0 ? void 0 : _g.tiltify) === null || _h === void 0 ? void 0 : _h.clientId) == null
            || ((_k = (_j = nodecg.bundleConfig) === null || _j === void 0 ? void 0 : _j.tiltify) === null || _k === void 0 ? void 0 : _k.clientSecret) == null) {
            this.donationData.value.status = 'DISCONNECTED';
            throw new Error('Missing bundle configuration. Tiltify connection is disabled.');
        }
        this.seenDonations = new Set();
        this.tiltifyApiClient = new TiltifyApiClient_1.TiltifyApiClient(nodecg.bundleConfig.tiltify.clientId, nodecg.bundleConfig.tiltify.clientSecret);
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
    requestCampaignData() {
        return __awaiter(this, void 0, void 0, function* () {
            const campaign = yield this.tiltifyApiClient.getCampaign(this.nodecg.bundleConfig.tiltify.campaignId);
            this.donationData.value = {
                status: this.donationData.value.status,
                donationTotal: parseFloat(campaign.data.amount_raised.value),
                donationGoal: parseFloat(campaign.data.goal.value),
                currency: campaign.data.amount_raised.currency
            };
        });
    }
    initSocket() {
        if (this.reconnectionTimeout != null) {
            clearTimeout(this.reconnectionTimeout);
        }
        this.donationData.value.status = 'CONNECTING';
        if (this.socket != null) {
            this.socket.close(expectedSocketClosureCode);
        }
        this.socket = new ws_1.default(this.nodecg.bundleConfig.tiltify.socketUrl, {
            headers: {
                Authorization: this.nodecg.bundleConfig.tiltify.authorization
            }
        });
        this.socket.on('error', err => {
            var _a;
            this.nodecg.log.error('Received error from Tiltify websocket:', (_a = err.message) !== null && _a !== void 0 ? _a : err);
        });
        this.socket.on('open', () => {
            this.donationData.value.status = 'CONNECTED';
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
            }
            else {
                this.donationData.value.status = 'DISCONNECTED';
            }
        });
        this.socket.on('ping', () => {
            this.heartbeat();
        });
        this.socket.on('message', data => {
            try {
                const message = JSON.parse(data.toString());
                if (!message.meta
                    || (message.meta.event_type !== 'public:direct:donation_updated'
                        && message.meta.event_type !== 'public:direct:fact_updated')) {
                    return;
                }
                switch (message.meta.event_type) {
                    case 'public:direct:fact_updated': {
                        const donationTotal = parseFloat(message.data.amount_raised.value);
                        if (message.data.id === this.nodecg.bundleConfig.tiltify.campaignId
                            && donationTotal > this.donationData.value.donationTotal) {
                            this.donationData.value = {
                                status: this.donationData.value.status,
                                donationTotal,
                                donationGoal: parseFloat(message.data.goal.value),
                                currency: message.data.amount_raised.currency
                            };
                        }
                        break;
                    }
                    case 'public:direct:donation_updated': {
                        const id = message.data.id;
                        if (message.data.campaign_id === this.nodecg.bundleConfig.tiltify.campaignId
                            && !this.seenDonations.has(id)) {
                            this.seenDonations.add(id);
                            this.nodecg.sendMessage('donationReceived', {
                                amount: parseFloat(message.data.amount.value),
                                id
                            });
                        }
                        break;
                    }
                }
            }
            catch (e) {
                this.nodecg.log.error('Received a message from Tiltify that could not be parsed.');
            }
        });
    }
    attemptReconnect() {
        var _a;
        if (this.reconnectionCount < maxReconnectionCount) {
            this.donationData.value.status = 'CONNECTING';
            this.reconnectionCount++;
            if (this.reconnectionCount === 1) {
                this.nodecg.log.info('Tiltify websocket has closed.');
            }
            this.reconnectionTimeout = setTimeout(() => {
                this.nodecg.log.info(`Reconnecting to Tiltify... (Attempt ${this.reconnectionCount})`);
                this.initSocket();
            }, (_a = reconnectionTimeouts[this.reconnectionCount - 1]) !== null && _a !== void 0 ? _a : 1000);
        }
        else {
            this.nodecg.log.warn('Too many reconnection attempts. Tiltify websocket is closed.');
            this.donationData.value.status = 'DISCONNECTED';
        }
    }
    heartbeat() {
        if (this.pingTimeout) {
            clearTimeout(this.pingTimeout);
        }
        this.pingTimeout = setTimeout(() => {
            var _a;
            (_a = this.socket) === null || _a === void 0 ? void 0 : _a.terminate();
        }, 21000);
    }
}
exports.RadiaTiltifyConnector = RadiaTiltifyConnector;
