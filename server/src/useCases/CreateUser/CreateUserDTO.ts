import { AccountStatusEnum } from "../../enums/AccountStatusEnum";

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    biography: string;
    password: string;
    gender: string;
    phone: string;
    birth: Date;
    dateRegistered: Date;
    accountStatus: AccountStatusEnum;
    uf: string;
    city: string;
}