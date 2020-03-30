import { IProductId, StatusEnum } from "./common";
export interface IDonationCreate {
    customer_name: string;
    customer_number: string | DonationSandboxEnum;
    email?: string;
    amount: number;
    product_id: string | "196";
}
export interface IDonationResponse {
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
    data: string | object;
    error?: string;
}
export declare enum DonationSandboxEnum {
    "sbox-081234000001" = "081234000001",
    "sbox-081234000004" = "081234000004"
}
