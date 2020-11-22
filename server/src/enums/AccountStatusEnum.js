"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatusEnumValidation = exports.AccountStatusEnum = void 0;
var AccountStatusEnum;
(function (AccountStatusEnum) {
    AccountStatusEnum["Pendent"] = "P";
    AccountStatusEnum["Disabled"] = "D";
    AccountStatusEnum["Enabled"] = "E";
})(AccountStatusEnum = exports.AccountStatusEnum || (exports.AccountStatusEnum = {}));
class AccountStatusEnumValidation {
    constructor() { }
    returnEnumByString(accountStatusText) {
        let accountStatus = AccountStatusEnum.Pendent;
        switch (accountStatusText) {
            case "D":
                accountStatus = AccountStatusEnum.Disabled;
                break;
            case "E":
                accountStatus = AccountStatusEnum.Enabled;
                break;
        }
        return accountStatus;
    }
    returnStringByEnum(accountStatusEnum) {
        return accountStatusEnum.toString();
    }
}
exports.AccountStatusEnumValidation = AccountStatusEnumValidation;
