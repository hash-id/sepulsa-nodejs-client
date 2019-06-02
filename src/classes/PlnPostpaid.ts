import { Config } from "./Config";
import {
  IPlnPostpaidInquiryResponse,
  IPlnPostpaidInquiry,
  IPlnPostpaidCreate,
  IPlnPostpaidResponse
} from "../interfaces/IPlnPostpaid";

export class PlnPostpaid {
  cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  async inquiry(inquiryData: IPlnPostpaidInquiry) {
    try {
      const response = await this.cfg.postRequest("/inquire/electricity_postpaid.json", inquiryData);
      return <IPlnPostpaidInquiryResponse>response.data;
    } catch (e) {
      return <IPlnPostpaidInquiryResponse>{
        error: e.message || e
      };
    }
  }

  async createTransaction(data: IPlnPostpaidCreate) {
    try {
      const response = await this.cfg.postRequest("/transaction/electricity_postpaid.json", data);
      return <IPlnPostpaidResponse>response.data;
    } catch (e) {
      return <IPlnPostpaidResponse>{
        error: e.message || e
      };
    }
  }

  async queryTransactionDetail(id: string) {
    try {
      const response = await this.cfg.getRequest(`/transaction/electricity_postpaid/${id}.json`);
      return <IPlnPostpaidResponse>response.data;
    } catch (e) {
      return <IPlnPostpaidResponse>{
        error: e.message || e
      };
    }
  }
}
