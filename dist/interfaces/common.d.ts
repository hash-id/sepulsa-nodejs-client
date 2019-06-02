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
