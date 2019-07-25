// import ICommon from "./interfaces/common";
// import IMobile from "./interfaces/IMobile";
// import IPlnPostpaid from "./interfaces/IPlnPostpaid";
// import IPlnPrepaid from "./interfaces/IPlnPrepaid";

import { MobileReloadEnum, MobileDataEnum, MobileSandboxEnum } from "./interfaces/IMobile";
import { PlnPostpaidEnum, PlnPostpaidSandboxEnum } from "./interfaces/IPlnPostpaid";
import { PlnPrepaidEnum, PlnPrepaidSandboxEnum } from "./interfaces/IPlnPrepaid";
import { GameSandboxEnum, GameSandboxCustomerEnum } from "./interfaces/IGame";
import { BpjsKesSandboxEnum } from "./interfaces/IBpjsKes";
import { StatusEnum, ResponseCodeEnum, ProductTypeEnum, IProductListResponse } from "./interfaces/common";

import { Config } from "./classes/Config";
import { General } from "./classes/General";
import { Mobile } from "./classes/Mobile";
import { Game } from "./classes/Game";
import { PlnPrepaid } from "./classes/PlnPrepaid";
import { PlnPostpaid } from "./classes/PlnPostpaid";
import { BpjsKesehatan } from "./classes/BpjsKes";

export {
  Config,
  General,
  Mobile,
  Game,
  PlnPrepaid,
  PlnPostpaid,
  BpjsKesehatan,
  //
  MobileReloadEnum,
  MobileDataEnum,
  PlnPostpaidEnum,
  PlnPrepaidEnum,
  MobileSandboxEnum,
  PlnPostpaidSandboxEnum,
  PlnPrepaidSandboxEnum,
  GameSandboxEnum,
  GameSandboxCustomerEnum,
  BpjsKesSandboxEnum,
  //
  StatusEnum,
  ResponseCodeEnum,
  ProductTypeEnum,
  IProductListResponse
};
