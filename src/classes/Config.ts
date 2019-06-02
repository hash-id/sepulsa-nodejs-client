import axios from "axios";

export class Config {
  private apiUrl: string;
  private ua: string | undefined;
  private base64Token: string;

  get targetUrl() {
    return this.apiUrl;
  }

  get authToken() {
    return `Basic ${this.base64Token}`;
  }

  constructor(url: string, user: string, password: string, userAgent?: string) {
    this.apiUrl = url;
    this.ua = userAgent || user;
    const authStr = new Buffer(`${user}:${password}`);
    this.base64Token = authStr.toString("base64");
  }

  getRequest(path: string, parameters?: object) {
    return axios.get(`${this.apiUrl}${path}`, {
      params: parameters,
      headers: {
        Authorization: `Basic ${this.base64Token}`,
        "User-Agent": this.ua
      }
    });
  }

  postRequest(path: string, data?: object) {
    return axios.post(`${this.apiUrl}${path}`, data, {
      headers: {
        Authorization: `Basic ${this.base64Token}`,
        "User-Agent": this.ua
      }
    });
  }
}
