"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIResult = void 0;
class DIResult {
    constructor() {
        this.success = true;
        this.errorCode = 0;
        this.messageError = '';
    }
    returnIds() {
        return this.ids;
    }
    addMessageError(errorCode, message) {
        this.errorCode = errorCode;
        this.messageError = message;
        this.success = false;
    }
    isValid() {
        return this.success;
    }
    getDIResultObject() {
        return {
            errorCode: this.errorCode,
            "messageError": this.messageError,
            "success": this.success
        };
    }
    getErrorCode() {
        return this.errorCode;
    }
    getMessage() {
        return this.messageError;
    }
}
exports.DIResult = DIResult;
