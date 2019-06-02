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
    ResponseCodeEnum["rc00"] = "Success";
    ResponseCodeEnum["rc10"] = "Pending";
    ResponseCodeEnum["rc20"] = "Wrong number/ number blocked/ number expired";
    ResponseCodeEnum["rc21"] = "Product Issue";
    ResponseCodeEnum["rc22"] = "Duplicate Transaction";
    ResponseCodeEnum["rc23"] = "Connection Timeout";
    ResponseCodeEnum["rc24"] = "Provider Cut Off";
    ResponseCodeEnum["rc25"] = "KWH is Overlimit";
    ResponseCodeEnum["rc26"] = "Payment Overlimit";
    ResponseCodeEnum["rc50"] = "Bill Already Paid/ Not Available";
    ResponseCodeEnum["rc51"] = "Invalid Inquiry Amount or No inquiry";
    ResponseCodeEnum["rc98"] = "Order Canceled by Ops";
    ResponseCodeEnum["rc99"] = "General Error";
})(ResponseCodeEnum = exports.ResponseCodeEnum || (exports.ResponseCodeEnum = {}));
