"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
class Config {
    get targetUrl() {
        return this.apiUrl;
    }
    get authToken() {
        return `Basic ${this.base64Token}`;
    }
    constructor(url, user, password, userAgent) {
        this.apiUrl = url;
        this.ua = userAgent || user;
        const authStr = new Buffer(`${user}:${password}`);
        this.base64Token = authStr.toString("base64");
    }
    getRequest(path, parameters) {
        return axios_1.default.get(`${this.apiUrl}${path}`, {
            params: parameters,
            headers: {
                Authorization: `Basic ${this.base64Token}`,
                "User-Agent": this.ua
            },
            httpsAgent: new https_1.default.Agent({ ecdhCurve: "auto" })
        });
    }
    postRequest(path, data) {
        return axios_1.default.post(`${this.apiUrl}${path}`, data, {
            headers: {
                Authorization: `Basic ${this.base64Token}`,
                "User-Agent": this.ua
            }
        });
    }
}
exports.Config = Config;
