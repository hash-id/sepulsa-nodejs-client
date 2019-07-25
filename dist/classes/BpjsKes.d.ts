import { Config } from "./Config";
import { IBpjsKesInquiry, IBpjsKesCreate, IBpjsKesInquiryResponseFailed, IBpjsKesInquiryResponseSuccess, IBpjsKesResponse } from "../interfaces/IBpjsKes";
export declare class BpjsKesehatan {
    cfg: Config;
    constructor(config: Config);
    inquiry(inquiryData: IBpjsKesInquiry): Promise<IBpjsKesInquiryResponseSuccess | IBpjsKesInquiryResponseFailed>;
    createTransaction(purchaseData: IBpjsKesCreate): Promise<IBpjsKesResponse>;
    queryTransactionDetail(id: string): Promise<IBpjsKesResponse>;
}
