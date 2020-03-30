import { Config } from "./Config";
import { IDonationCreate, IDonationResponse } from "../interfaces/IDonation";
export declare class Donation {
    private cfg;
    constructor(config: Config);
    createTransaction(data: IDonationCreate): Promise<IDonationResponse>;
    queryTransactionDetail(id: string): Promise<IDonationResponse>;
}
