export enum AccountStatusEnum {
    Pendent = "P",
    Disabled = "D",
    Enabled = "E",
}

export class AccountStatusEnumValidation {
    constructor() { }

    returnEnumByString(accountStatusText: string) {
        let accountStatus: AccountStatusEnum = AccountStatusEnum.Pendent;
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

    returnStringByEnum(accountStatusEnum: AccountStatusEnum) {
        return accountStatusEnum.toString();
    }
}