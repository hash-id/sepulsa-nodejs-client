import { Config } from "./Config";
import { IBalanceResponse, ProductTypeEnum, IProductListResponse } from "../interfaces/common";
export declare class General {
    private cfg;
    constructor(config: Config);
    getBalance(): Promise<IBalanceResponse>;
    getProduct(productType?: ProductTypeEnum): Promise<IProductListResponse>;
}
