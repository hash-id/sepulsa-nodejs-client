import { Config } from "./Config";
import { IGameCreate, IGameResponse } from "../interfaces/IGame";

export class Game {
  private cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  async createTransaction(data: IGameCreate) {
    try {
      const response = await this.cfg.postRequest("/transaction/game.json", data);
      const respData = response.data as IGameResponse;
      return respData;
    } catch (e) {
      return <IGameResponse>{
        error: e.message || e
      };
    }
  }

  async queryTransactionDetail(id: string) {
    try {
      const response = await this.cfg.getRequest(`/transaction/${id}.json`);
      const respData = response.data as IGameResponse;
      return respData;
    } catch (e) {
      return <IGameResponse>{
        error: e.message || e
      };
    }
  }
}
