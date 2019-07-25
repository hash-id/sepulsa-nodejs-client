import { IProductId, StatusEnum } from "./common";
export interface IBpjsKesInquiry {
    customer_number: string | BpjsKesSandboxEnum;
    payment_period: string;
    product_id: number | 34;
}
export interface IBpjsKesInquiryResponseSuccess {
    admin_charge: number;
    trx_id: string;
    stan: string;
    datetime: string;
    merchant_code: string;
    response_code: string;
    status: boolean;
    trx_type: string;
    product_type: string;
    premi: string;
    amount: string;
    rc: string;
    no_va: string;
    periode: string;
    name: string;
    kode_cabang: string;
    nama_cabang: string;
    sisa: string;
    va_count: string;
    no_va_kk: string;
    error?: string;
}
export interface IBpjsKesInquiryResponseFailed {
    rc: string;
    status: boolean;
    response_code: string;
    desc: string;
    message: string;
    error?: string;
}
export interface IBpjsKesCreate {
    customer_number: string;
    product_id: number | 34;
    payment_period: string;
    order_id: string;
}
export interface IBpjsKesResponse {
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
    payment_period: string;
    data: string | IBpjsKesData;
    error?: string;
}
export interface IBpjsKesData {
    trx_type: string;
    product_type: string;
    stan: string;
    premi: string;
    admin_charge: string;
    amount: string;
    datetime: string;
    merchant_code: string;
    rc: string;
    no_va: string;
    periode: string;
    name: string;
    kode_cabang: string;
    nama_cabang: string;
    sisa: string;
    va_count: string;
    no_va_kk: string;
    trx_id: string;
    info_text: string;
    sw_reff: string;
    waktu_lunas: string;
    kode_loket: string;
    nama_loket: string;
    alamat_loket: string;
    phone_loket: string;
    kode_kab_kota: string;
}
export declare enum BpjsKesSandboxEnum {
    "sbox-71800" = "0000001430071800",
    "sbox-71801" = "0000001430071801",
    "sbox-71802" = "0000001430071802"
}
