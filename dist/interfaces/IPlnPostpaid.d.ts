import { IProductId } from "./common";
export interface IPlnPostpaidInquiry {
    customer_number: string;
    product_id: PlnPostpaidEnum;
}
export interface IPlnPostpaidInquiryResponse {
    amount: string;
    admin_charge: string;
    trx_id: string;
    stan: string;
    datetime: string;
    merchant_code: string;
    bank_code: string;
    rc: string;
    terminal_id: string;
    material_number: string;
    subscriber_id: string;
    subscriber_name: string;
    switcher_refno: string;
    subscriber_segmentation: string;
    power: number;
    outstanding_bill: string;
    bill_status: string;
    blth_summary: string;
    stand_meter_summary: string;
    bills: [IPlnPostpaidBills];
    status: boolean;
    response_code: string;
    error?: string;
}
export interface IPlnPostpaidBills {
    bill_period: string;
    produk: string;
    due_date: string;
    meter_read_date: string;
    total_electricity_bill: string;
    incentive: string;
    value_added_tax: string;
    penalty_fee: string;
    previous_meter_reading1: string;
    current_meter_reading1: string;
    previous_meter_reading2: string;
    current_meter_reading2: string;
    previous_meter_reading3: string;
    current_meter_reading3: string;
}
export interface IPlnPostpaidCreate extends IPlnPostpaidInquiry {
    order_id: string;
}
export interface IPlnPostpaidResponse {
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
    data: string | IPlnPostpaidData;
    error?: string;
}
export interface IPlnPostpaidData {
    amount: string;
    admin_charge: string;
    trx_id: string;
    stan: string;
    datetime: string;
    merchant_code: string;
    bank_code: string;
    rc: string;
    terminal_id: string;
    material_number: string;
    subscriber_id: string;
    subscriber_name: string;
    switcher_refno: string;
    subscriber_segmentation: string;
    power: number;
    outstanding_bill: string;
    bill_status: string;
    blth_summary: string;
    stand_meter_summary: string;
    bills: IPlnPostpaidBills;
    payment_status: string;
    payment_date: string;
    payment_time: string;
    pln_refno: string;
    service_unit: string;
    service_unit_phone: string;
    info_text: string;
}
export declare enum PlnPostpaidEnum {
    "live" = 189,
    "sandbox" = 80
}
