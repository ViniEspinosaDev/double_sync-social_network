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

    constructor(name: string, email: string, biography: string, password: string, gender: string,
        phone: string, birth: Date, dateRegistered: Date, uf: string, city: string, id?: string,
        accountStatus?: AccountStatusEnum) {
        this.name = name;
        this.email = email;
        this.biography = biography;
        this.password = password;
        this.gender = gender;
        this.phone = phone;
        this.birth = birth;
        this.dateRegistered = dateRegistered;
        this.accountStatus = accountStatus ? accountStatus : AccountStatusEnum.Pendent;
        this.uf = uf;
        this.city = city;

        if (!id) {
            this.id = v4();
        }
    }

    changeAccountStatus(newAccountStatus: AccountStatusEnum) {
        this.accountStatus = newAccountStatus;
    }
}