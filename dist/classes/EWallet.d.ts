import { Config } from "./Config";
import { IEWalletCreate, IEWalletResponse } from "../interfaces/IEWallet";
export declare class EWallet {
    private cfg;
    constructor(config: Config);
    createTransaction(data: IEWalletCreate): Promise<IEWalletResponse>;
    queryTransactionDetail(id: string): Promise<IEWalletResponse>;
}
