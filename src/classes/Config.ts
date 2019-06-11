import axios from "axios";
import https from "https";
import http from "http";

export class Config {
  private apiUrl: string;
  private ua: string | undefined;
  private base64Token: string;
  private verbose: boolean = false;

  get targetUrl() {
    return this.apiUrl;
  }

  get authToken() {
    return `Basic ${this.base64Token}`;
  }

  set debug(mode: boolean) {
    this.verbose = mode || false;
  }

  constructor(url: string, user: string, password: string, userAgent?: string) {
    this.apiUrl = url;
    this.ua = userAgent || user;
    const authStr = new Buffer(`${user}:${password}`);
    this.base64Token = authStr.toString("base64");
  }

  getRequest(path: string, parameters?: object) {
    const requestInstance = axios.get(`${this.apiUrl}${path}`, {
      params: parameters,
      headers: {
        Authorization: `Basic ${this.base64Token}`,
        "User-Agent": this.ua
      },
      httpsAgent: new https.Agent({ ecdhCurve: "auto" })
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

  postRequest(path: string, data?: object) {
    const requestInstance = axios.post(`${this.apiUrl}${path}`, data, {
      headers: {
        Authorization: `Basic ${this.base64Token}`,
        "User-Agent": this.ua
      },
      httpsAgent: new https.Agent({ ecdhCurve: "auto" })
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
