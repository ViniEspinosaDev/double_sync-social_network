"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
const AccountStatusEnum_1 = require("../enums/AccountStatusEnum");
class User {
    constructor(name, email, biography, password, gender, phone, birth, dateRegistered, uf, city, id, accountStatus) {
        this.name = name;
        this.email = email;
        this.biography = biography;
        this.password = password;
        this.gender = gender;
        this.phone = phone;
        this.birth = birth;
        this.dateRegistered = dateRegistered;
        this.accountStatus = accountStatus ? accountStatus : AccountStatusEnum_1.AccountStatusEnum.Pendent;
        this.uf = uf;
        this.city = city;
        if (!id) {
            this.id = uuid_1.v4();
        }
    }
    changeAccountStatus(newAccountStatus) {
        this.accountStatus = newAccountStatus;
    }
}
exports.User = User;
