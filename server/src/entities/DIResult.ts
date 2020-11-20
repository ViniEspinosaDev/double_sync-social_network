export class DIResult {
    private success: boolean = true;
    private errorCode: number = 0;
    private messageError: string = '';
    public ids!: number[];

    returnIds() {
        return this.ids;
    }

    addMessageError(errorCode: number, message: string) {
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