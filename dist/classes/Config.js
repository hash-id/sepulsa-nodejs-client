"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
class Config {
    constructor(url, user, password, userAgent) {
        this.verbose = false;
        this.apiUrl = url;
        this.ua = userAgent || user;
        const authStr = new Buffer(`${user}:${password}`);
        this.base64Token = authStr.toString("base64");
    }
    get targetUrl() {
        return this.apiUrl;
    }
    get authToken() {
        return `Basic ${this.base64Token}`;
    }
    set debug(mode) {
        this.verbose = mode || false;
    }
    getRequest(path, parameters) {
        const requestInstance = axios_1.default.get(`${this.apiUrl}${path}`, {
            params: parameters,
            headers: {
                Authorization: `Basic ${this.base64Token}`,
                "User-Agent": this.ua
            },
            httpsAgent: new https_1.default.Agent({ ecdhCurve: "auto" })
        });
        if (this.verbose) {
            return requestInstance
                .then(result => {
                console.log(result);
                return result;
            })
                .catch(e => {
                console.error(e);
                throw e;
            });
        }
        return requestInstance;
    }
    postRequest(path, data) {
        const requestInstance = axios_1.default.post(`${this.apiUrl}${path}`, data, {
            headers: {
                Authorization: `Basic ${this.base64Token}`,
                "User-Agent": this.ua
            },
            httpsAgent: new https_1.default.Agent({ ecdhCurve: "auto" })
        });
        if (this.verbose) {
            return requestInstance
                .then(result => {
                console.log(result);
                return result;
            })
                .catch(e => {
                console.error(e);
                throw e;
            });
        }
        return requestInstance;
    }
}
exports.Config = Config;
