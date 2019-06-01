import { Config } from "./Config";
import { IPlnPrepaidInquiry, IPlnPrepaidCreate, IPlnPrepaidInquiryResponse, IPlnPrepaidResponse } from "../interfaces/IPlnPrepaid";
import { IError } from "../interfaces/common";
export declare class PlnPrepaid {
    cfg: Config;
    constructor(config: Config);
    inquiry(inquiryData: IPlnPrepaidInquiry): Promise<IError | IPlnPrepaidInquiryResponse>;
    createTransaction(purchaseData: IPlnPrepaidCreate): Promise<IError | IPlnPrepaidResponse>;
    queryTransactionDetail(id: string): Promise<IError | IPlnPrepaidResponse>;
}
