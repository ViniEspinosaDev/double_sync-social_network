import { User } from "../../entities/Users";
import { IEmailTransporterProvider } from "../../providers/IEmailTransporterProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GenericUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IEmailTransporterProvider
    ) { }

    async getUserByEmail(email: string) {
        var user = await this.usersRepository.getUserByEmail(email);

        return user;
    }

    async getUserById(id: string) {
        var user = await this.usersRepository.getUserById(id);

        return user;
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
}