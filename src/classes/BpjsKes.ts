import { Config } from "./Config";
import {
  IBpjsKesInquiry,
  IBpjsKesCreate,
  IBpjsKesInquiryResponseFailed,
  IBpjsKesInquiryResponseSuccess,
  IBpjsKesResponse
} from "../interfaces/IBpjsKes";

export class BpjsKesehatan {
  cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  async inquiry(inquiryData: IBpjsKesInquiry): Promise<IBpjsKesInquiryResponseSuccess | IBpjsKesInquiryResponseFailed> {
    try {
      const response = await this.cfg.postRequest("/inquire/bpjs_kesehatan.json", inquiryData);
      return response.data;
    } catch (e) {
      return {
        error: e.message || e
      } as IBpjsKesInquiryResponseFailed;
    }
  }

  async createTransaction(purchaseData: IBpjsKesCreate) {
    try {
      const response = await this.cfg.postRequest("/transaction/bpjs_kesehatan.json", purchaseData);
      return <IBpjsKesResponse>response.data;
    } catch (e) {
      return <IBpjsKesResponse>{
        error: e.message || e
      };
    }
  }

  async queryTransactionDetail(id: string) {
    try {
      const response = await this.cfg.getRequest(`/transaction/${id}.json`);
      return <IBpjsKesResponse>response.data;
    } catch (e) {
      return <IBpjsKesResponse>{
        error: e.message || e
      };
    }
  }
}
