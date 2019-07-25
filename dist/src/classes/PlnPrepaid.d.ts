import { Config } from "./Config";
import { IPlnPrepaidInquiry, IPlnPrepaidCreate, IPlnPrepaidInquiryResponse, IPlnPrepaidResponse } from "../interfaces/IPlnPrepaid";
export declare class PlnPrepaid {
    cfg: Config;
    constructor(config: Config);
    inquiry(inquiryData: IPlnPrepaidInquiry): Promise<IPlnPrepaidInquiryResponse>;
    createTransaction(purchaseData: IPlnPrepaidCreate): Promise<IPlnPrepaidResponse>;
    queryTransactionDetail(id: string): Promise<IPlnPrepaidResponse>;
}
