import { Config } from "./Config";
import { IMobileCreate, IMobileResponse } from "../interfaces/IMobile";
export declare class Mobile {
    private cfg;
    constructor(config: Config);
    createTransaction(data: IMobileCreate): Promise<IMobileResponse>;
    queryTransactionDetail(id: string): Promise<IMobileResponse>;
}
