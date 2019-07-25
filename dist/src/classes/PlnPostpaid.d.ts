import { Config } from "./Config";
import { IPlnPostpaidInquiryResponse, IPlnPostpaidInquiry, IPlnPostpaidCreate, IPlnPostpaidResponse } from "../interfaces/IPlnPostpaid";
export declare class PlnPostpaid {
    cfg: Config;
    constructor(config: Config);
    inquiry(inquiryData: IPlnPostpaidInquiry): Promise<IPlnPostpaidInquiryResponse>;
    createTransaction(data: IPlnPostpaidCreate): Promise<IPlnPostpaidResponse>;
    queryTransactionDetail(id: string): Promise<IPlnPostpaidResponse>;
}
