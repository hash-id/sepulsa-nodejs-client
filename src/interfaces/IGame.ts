import { IProductId, StatusEnum } from "./common";

export interface IGameCreate {
  customer_number: string | GameSandboxEnum;
  product_id: number | GameSandboxCustomerEnum;
  order_id: string;
}

export interface IGameResponse {
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
  error?: string /* augmented error information */;
}

export enum GameSandboxEnum {
  "sandbox" = 44
}

export enum GameSandboxCustomerEnum {
  "sbox-081234561001" = "081234561001",
  "sbox-081234561002" = "081234561002",
  "sbox-081234562001" = "081234562001"
}
