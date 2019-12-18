import { IProductId, StatusEnum } from "./common";
export interface IEWalletCreate {
    customer_number: string | EWalletSandboxEnum;
    product_id: string | "194";
    order_id: string;
}
export interface IEWalletResponse {
    transaction_id: string;
    type: string;
    created: string;
    changed: string;
    customer_number: string;
    order_id: string;
    price: string;
    status: StatusEnum;
    response_code: string;
    serial_number: string;
    amount: string;
    product_id: IProductId;
    token: string;
    data: string;
    error?: string;
}
export declare enum EWalletSandboxEnum {
    "sbox-081298700001" = "081298700001",
    "sbox-081234000002" = "081234000002",
    "sbox-081234000003" = "081234000003",
    "sbox-081234000004" = "081234000004"
}
