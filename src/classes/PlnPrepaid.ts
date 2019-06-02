import { Config } from "./Config";
import {
  IPlnPrepaidInquiry,
  IPlnPrepaidCreate,
  IPlnPrepaidInquiryResponse,
  IPlnPrepaidResponse
} from "../interfaces/IPlnPrepaid";

export class PlnPrepaid {
  cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  async inquiry(inquiryData: IPlnPrepaidInquiry) {
    try {
      const response = await this.cfg.postRequest("/inquire/electricity.json", inquiryData);
      return <IPlnPrepaidInquiryResponse>response.data;
    } catch (e) {
      return <IPlnPrepaidInquiryResponse>{
        error: e.message || e
      };
    }
  }

  async createTransaction(purchaseData: IPlnPrepaidCreate) {
    try {
      const response = await this.cfg.postRequest("/transaction/electricity.json", purchaseData);
      return <IPlnPrepaidResponse>response.data;
    } catch (e) {
      return <IPlnPrepaidInquiryResponse>{
        error: e.message || e
      };
    }
  }

  async queryTransactionDetail(id: string) {
    try {
      const response = await this.cfg.getRequest(`/transaction/electricity/${id}.json`);
      return <IPlnPrepaidResponse>response.data;
    } catch (e) {
      return <IPlnPrepaidInquiryResponse>{
        error: e.message || e
      };
    }
  }
}
