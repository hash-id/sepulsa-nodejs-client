import { Config } from "./Config";
import { IMobileCreate, IMobileResponse } from "../interfaces/IMobile";

export class Mobile {
  private cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  async createTransaction(data: IMobileCreate) {
    try {
      const response = await this.cfg.postRequest("/transaction/mobile.json", data);
      const respData = response.data as IMobileResponse;
      return respData;
    } catch (e) {
      return <IMobileResponse>{
        error: e.message || e
      };
    }
  }

  async queryTransactionDetail(id: string) {
    try {
      const response = await this.cfg.getRequest(`/transaction/mobile/${id}.json`);
      const respData = response.data as IMobileResponse;
      return respData;
    } catch (e) {
      return <IMobileResponse>{
        error: e.message || e
      };
    }
  }
}
