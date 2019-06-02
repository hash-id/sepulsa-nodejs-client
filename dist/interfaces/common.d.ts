export interface IClientConfig {
    url: string;
    user: string;
    password: string;
    userAgent: string;
}
export interface IProductId {
    product_id: string;
    type: string;
    label: string;
    operator: string;
    nominal: string;
    price: string;
    enabled: string;
    field_denom?: string;
    field_paket_data?: boolean;
}
export interface IBalanceResponse {
    balance: number | null;
    error?: string;
}
export declare enum StatusEnum {
    "success" = "success",
    "failed" = "failed",
    "pending" = "pending",
    "cancel" = "cancel"
}
export declare enum ResponseCodeEnum {
    "rc00" = "Success",
    "rc10" = "Pending",
    "rc20" = "Wrong number/ number blocked/ number expired",
    "rc21" = "Product Issue",
    "rc22" = "Duplicate Transaction",
    "rc23" = "Connection Timeout",
    "rc24" = "Provider Cut Off",
    "rc25" = "KWH is Overlimit",
    "rc26" = "Payment Overlimit",
    "rc50" = "Bill Already Paid/ Not Available",
    "rc51" = "Invalid Inquiry Amount or No inquiry",
    "rc98" = "Order Canceled by Ops",
    "rc99" = "General Error"
}
