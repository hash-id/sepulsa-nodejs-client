"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["success"] = "success";
    StatusEnum["failed"] = "failed";
    StatusEnum["pending"] = "pending";
    StatusEnum["cancel"] = "cancel";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
var ResponseCodeEnum;
(function (ResponseCodeEnum) {
    ResponseCodeEnum["Success"] = "00";
    ResponseCodeEnum["Pending"] = "10";
    ResponseCodeEnum["Wrong number/ number blocked/ number expired"] = "20";
    ResponseCodeEnum["Product Issue"] = "21";
    ResponseCodeEnum["Duplicate Transaction"] = "22";
    ResponseCodeEnum["Connection Timeout"] = "23";
    ResponseCodeEnum["Provider Cut Off"] = "24";
    ResponseCodeEnum["KWH is Overlimit"] = "25";
    ResponseCodeEnum["Payment Overlimit"] = "26";
    ResponseCodeEnum["Bill Already Paid/ Not Available"] = "50";
    ResponseCodeEnum["Invalid Inquiry Amount or No inquiry"] = "51";
    ResponseCodeEnum["Order Canceled by Ops"] = "98";
    ResponseCodeEnum["General Error"] = "99";
})(ResponseCodeEnum = exports.ResponseCodeEnum || (exports.ResponseCodeEnum = {}));
var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum["mobile"] = "mobile";
    ProductTypeEnum["electricity"] = "electricity";
    ProductTypeEnum["electricity_postpaid"] = "electricity_postpaid";
    ProductTypeEnum["bpjs_kesehatan"] = "bpjs_kesehatan";
    ProductTypeEnum["game"] = "game";
    ProductTypeEnum["multi"] = "multi";
    ProductTypeEnum["telkom_postpaid"] = "telkom_postpaid";
    ProductTypeEnum["pdam"] = "pdam";
})(ProductTypeEnum = exports.ProductTypeEnum || (exports.ProductTypeEnum = {}));
