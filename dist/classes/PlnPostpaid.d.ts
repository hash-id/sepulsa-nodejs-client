import { Config } from "./Config";
import { IPlnPostpaidInquiryResponse, IPlnPostpaidInquiry, IPlnPostpaidCreate, IPlnPostpaidResponse } from "../interfaces/IPlnPostpaid";
import { IError } from "../interfaces/common";
export declare class PlnPostpaid {
    cfg: Config;
    constructor(config: Config);
    inquiry(inquiryData: IPlnPostpaidInquiry): Promise<IError | IPlnPostpaidInquiryResponse>;
    createTransaction(data: IPlnPostpaidCreate): Promise<IError | IPlnPostpaidResponse>;
    queryTransactionDetail(id: string): Promise<IError | IPlnPostpaidResponse>;
}
