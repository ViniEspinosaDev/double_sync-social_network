export class DIResult {
    public success: boolean = true;
    public errorCode: number = 0;
    public messageError: string = '';
    public ids!: number[];

    // constructor(Success: boolean, ErrorCode: number, MessageError: string, Ids: Array<string>) {
    //     this.success = Success;
    //     this.errorCode = ErrorCode;
    //     this.messageError = MessageError;
    //     this.ids = Ids;
    // }

    returnIds() {
        return this.ids;
    }

}