import { AccountStatusEnum } from "../../enums/AccountStatusEnum";

export interface ICreateUserRequestDTO {
    name: string;
    biography: string;
    password: string;
    gender: string;
    phone: string;
    birth: Date;
    accountStatus: AccountStatusEnum;
    uf: string;
    city: string;
}