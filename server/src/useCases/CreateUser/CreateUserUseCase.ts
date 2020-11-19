import { User } from "../../entities/Users";
import { IEmailTransporterProvider } from "../../providers/IEmailTransporterProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IEmailTransporterProvider
    ) { }

    async execute(user: User) {
        const userAlreadyExists = await this.usersRepository.findByEmail(user.email);

        if (userAlreadyExists) {
            throw new Error('Este e-mail já está em uso. Faça o login.');
        }

        var ids = await this.usersRepository.save(user);
        var userId = ids.returnIds()[0];

        const confirmationLink = `http://localhost:3030/register/confirmation/${user.id}`;
        const emailBody = `<p>Olá, estamos quase lá. Para confirmar sua 
                            conta clique no seguinte link.<p><br/><a href="${confirmationLink}">Confirmar 
                            cadastro</a>`;

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