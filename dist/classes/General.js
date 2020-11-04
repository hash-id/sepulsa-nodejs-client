"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.General = void 0;
class General {
    constructor(config) {
        this.cfg = config;
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cfg.getRequest("/getBalance");
                return {
                    balance: response.data.balance
                };
            }
            catch (e) {
                return {
                    balance: null,
                    error: e
                };
            }
        });
    }
    getProduct(productType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reqParams = {
                    type: productType
                };
                if (!productType)
                    delete reqParams.type;
                ///
                const response = yield this.cfg.getRequest("/product.json", reqParams);
                return {
                    data: response.data.list
                };
            }
            catch (e) {
                return {
                    data: [],
                    error: e
                };
            }
        });
    }
}
exports.General = General;
