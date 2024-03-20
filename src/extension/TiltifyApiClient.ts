import axios from 'axios';

const tiltifyBaseUrl = 'https://v5api.tiltify.com';

interface TiltifyGetAccessTokenResponse {
    access_token: string
    created_at: string
    expires_in: number
    refresh_token: string
    scope: string
    token_type: string
}

interface TiltifyGetCampaignResponse {
    data: {
        amount_raised: {
            currency: string
            value: string
        }
        goal: {
            currency: string
            value: string
        }
    }
}

export class TiltifyApiClient {
    private readonly clientId: string;
    private readonly clientSecret: string;
    private token: string | undefined;
    private tokenExpiryTime: number | undefined;

    constructor(clientId: string, clientSecret: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    private async requestToken() {
        const tokenResponse = await axios.request<TiltifyGetAccessTokenResponse>({
            baseURL: tiltifyBaseUrl,
            url: '/oauth/token',
            method: 'post',
            params: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: 'client_credentials',
                scope: 'public'
            }
        });

        this.token = tokenResponse.data.access_token;
        this.tokenExpiryTime = Date.now() + tokenResponse.data.expires_in;
    }

    private async getToken() {
        if (this.tokenExpiryTime == null || Date.now() >= this.tokenExpiryTime) {
            await this.requestToken();
        }

        return this.token;
    }

    async getCampaign(id: string): Promise<TiltifyGetCampaignResponse> {
        const response = await axios.get<TiltifyGetCampaignResponse>(`${tiltifyBaseUrl}/api/public/campaigns/${id}`, {
            headers: {
                Authorization: await this.getToken()
            }
        });

        return response.data;
    }
}
