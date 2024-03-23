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
exports.TiltifyApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const tiltifyBaseUrl = 'https://v5api.tiltify.com';
class TiltifyApiClient {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    requestToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenResponse = yield axios_1.default.request({
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
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tokenExpiryTime == null || Date.now() >= this.tokenExpiryTime) {
                yield this.requestToken();
            }
            return this.token;
        });
    }
    getCampaign(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${tiltifyBaseUrl}/api/public/campaigns/${id}`, {
                headers: {
                    Authorization: yield this.getToken()
                }
            });
            return response.data;
        });
    }
}
exports.TiltifyApiClient = TiltifyApiClient;
