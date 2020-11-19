import { v4 } from 'uuid';
import { AccountStatusEnum } from '../enums/AccountStatusEnum';

export class User {
    public readonly id!: string;

    public name!: string;
    public email!: string;
    public biography!: string;
    public password!: string;
    public gender!: string;
    public phone!: string;
    public birth!: Date;
    public dateRegistered!: Date;
    public accountStatus!: AccountStatusEnum;
    public uf!: string;
    public city!: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        }
    }
}