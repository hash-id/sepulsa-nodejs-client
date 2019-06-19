import { Config } from "./Config";
import { IBalanceResponse, ProductTypeEnum, IProductListResponse, IProductId } from "../interfaces/common";

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

  async getProduct(productType?: ProductTypeEnum): Promise<IProductListResponse> {
    try {
      const reqParams = {
        type: productType
      };
      if (!productType) delete reqParams.type;
      ///
      const response = await this.cfg.getRequest("/product.json", reqParams);
      return {
        data: response.data.list as Array<IProductId>
      };
    } catch (e) {
      return {
        data: [],
        error: e
      };
    }
  }
}
