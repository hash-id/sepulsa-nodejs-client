import { Config } from "./Config";
import { IBalanceResponse } from "../interfaces/common";

export class General {
  private cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  async getBalance(): Promise<IBalanceResponse> {
    try {
      const response = await this.cfg.getRequest("/getBalance");
      return {
        balance: response.data.balance
      };
    } catch (e) {
      return {
        balance: null,
        error: e
      };
    }
  }
}
