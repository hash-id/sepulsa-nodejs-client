import { IProductId } from "./common";
export interface IPlnPrepaidInquiry {
    customer_number: string;
    product_id: PlnPrepaidEnum;
}
export interface IPlnPrepaidInquiryResponse {
    admin_charge: number;
    trx_id: string;
    stan: string;
    datetime: string;
    merchant_code: string;
    bank_code: string;
    terminal_id: string;
    material_number: string;
    subscriber_id: string;
    pln_refno: string;
    switcher_refno: string;
    subscriber_name: string;
    subscriber_segmentation: string;
    power: number;
    distribution_code: string;
    service_unit: string;
    service_unit_phone: string;
    total_repeat: string;
    response_code: string;
    status: boolean;
    max_kwh_unit: string;
    power_purchase_unsold: string;
    power_purchase_unsold2: string;
    error?: string;
}
export interface IPlnPrepaidCreate {
    customer_number: string;
    product_id: PlnPrepaidEnum;
    meter_number: string;
    order_id: string;
}
export interface IPlnPrepaidResponse {
    transaction_id: string;
    type: string;
    created: string;
    changed: string;
    customer_number: string;
    order_id: string;
    price: string;
    status: string;
    response_code: string;
    serial_number: string;
    amount: string;
    product_id: IProductId;
    meter_number: string;
    token: string;
    data: string | IPlnPrepaidData;
    error?: string;
}
export interface IPlnPrepaidData {
    admin_charge: string;
    trx_id: string;
    stan: string;
    datetime: string;
    merchant_code: string;
    bank_code: string;
    terminal_id: string;
    material_number: string;
    subscriber_id: string;
    pln_refno: string;
    switcher_refno: string;
    subscriber_name: string;
    subscriber_segmentation: string;
    power: number;
    distribution_code: string;
    service_unit: string;
    service_unit_phone: string;
    total_repeat: string;
    rc: string;
    amount: string;
    angsuran: string;
    info_text: string;
    jml_kwh: string;
    max_kwh: string;
    meterai: string;
    power_purchase: string;
    ppj: string;
    ppn: string;
    produk: string;
    settlement: string;
    token: string;
    vending_refno: string;
}
export declare enum PlnPrepaidEnum {
    "20k" = "111",
    "25k" = "29",
    "100k" = "30",
    "200k" = "32",
    "500k" = "33",
    "1000k" = "34",
    "test" = "25"
}
