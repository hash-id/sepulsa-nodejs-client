import { Config } from "./Config";
import { IBalanceResponse } from "../interfaces/common";
export declare class General {
    private cfg;
    constructor(config: Config);
    getBalance(): Promise<IBalanceResponse>;
}
