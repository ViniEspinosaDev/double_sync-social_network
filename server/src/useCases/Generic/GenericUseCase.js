"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericUseCase = void 0;
const AccountStatusEnum_1 = require("../../enums/AccountStatusEnum");
class GenericUseCase {
    constructor(usersRepository, mailProvider, accountStatusEnumValidation) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
        this.accountStatusEnumValidation = accountStatusEnumValidation;
    }
    async getUserByEmail(email) {
        var user = await this.usersRepository.getUserByEmail(email);
        return user;
    }
    async getUserById(id) {
        var user = await this.usersRepository.getUserById(id);
        return user;
    }
    async getUserByPassword(email, password) {
        return this.usersRepository.getUserByPassword(email, password);
    }
    async sendConfirmationEmail(user, emailBody) {
        await this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: user.email
            },
            from: {
                name: 'Double Sync Team',
                email: 'doublesync2020@gmail.com'
            },
            subject: 'E-mail de confirmação da conta',
            body: `${emailBody}`
        });
    }
    async sendEmailConfirmationToChangePassword(email) {
        const user = await this.getUserByEmail(email);
        const confirmationLink = `http://localhost:3000/forget-password/${user.id}`;
        const emailBody = `<p>Para alterar sua senha, clique no seguinte link.<p><br/><a href="${confirmationLink}">Alterar senha</a>`;
        await this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: email
            },
            from: {
                name: 'Double Sync Team',
                email: 'doublesync2020@gmail.com'
            },
            subject: 'E-mail de confirmação da conta',
            body: `${emailBody}`
        });
    }
    async validEmail(email) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return true;
        }
        return false;
    }
    async emailPasswordAreEmpty(email, password) {
        if (email === '' || password === '')
            return true;
        return false;
    }
    async passwordsAreEquals(password1, password2) {
        if (password1 === password2) {
            return true;
        }
        return false;
    }
    async emailAlreadyRegistered(email) {
        return await this.usersRepository.findByEmail(email);
    }
    async getAccountStatusEnum(email) {
        let user = await this.usersRepository.getUserByEmail(email);
        return this.accountStatusEnumValidation.returnEnumByString(user.accountStatus);
    }
    async userIsActive(email) {
        let accountStatusEnum = await this.getAccountStatusEnum(email);
        if (accountStatusEnum === AccountStatusEnum_1.AccountStatusEnum.Enabled) {
            return true;
        }
        return false;
    }
}
exports.GenericUseCase = GenericUseCase;
