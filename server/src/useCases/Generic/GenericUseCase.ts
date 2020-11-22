import { User } from "../../entities/Users";
import { AccountStatusEnum, AccountStatusEnumValidation } from "../../enums/AccountStatusEnum";
import { IEmailTransporterProvider } from "../../providers/IEmailTransporterProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GenericUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IEmailTransporterProvider,
        private accountStatusEnumValidation: AccountStatusEnumValidation
    ) { }

    async getUserByEmail(email: string) {
        var user = await this.usersRepository.getUserByEmail(email);

        return user;
    }

    async getUserById(id: string) {
        var user = await this.usersRepository.getUserById(id);

        return user;
    }

    async getUserByPassword(email: string, password: string) {
        return this.usersRepository.getUserByPassword(email, password);
    }

    async sendConfirmationEmail(user: User, emailBody: string) {
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

    async sendEmailConfirmationToChangePassword(email: string) {
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

    async validEmail(email: string): Promise<boolean> {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return true;
        }
        return false;
    }

    async emailPasswordAreEmpty(email: string, password: string): Promise<boolean> {
        if (email === '' || password === '')
            return true;

        return false;
    }

    async passwordsAreEquals(password1: string, password2: string): Promise<boolean> {

        if (password1 === password2) {
            return true;
        }

        return false;
    }

    async emailAlreadyRegistered(email: string): Promise<Boolean> {
        return await this.usersRepository.findByEmail(email);
    }

    async getAccountStatusEnum(email: string) {
        let user = await this.usersRepository.getUserByEmail(email);
        return this.accountStatusEnumValidation.returnEnumByString(user.accountStatus);
    }

    async userIsActive(email: string): Promise<Boolean> {
        let accountStatusEnum = await this.getAccountStatusEnum(email);
        if (accountStatusEnum === AccountStatusEnum.Enabled) {
            return true;
        }
        return false;
    }
}