import { User } from "../../entities/Users";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('Este e-mail já está em uso. Faça o login.');
        }

        const user = new User(data);

        var ids = await this.usersRepository.save(user);
        var userId = ids.returnIds()[0];

        const confirmationLink = `http://localhost:3030/register/confirmation/${userId}`;
        const emailBody = `<p>Olá, estamos quase lá. Para confirmar sua 
                            conta clique no seguinte link.<p><br/><a href="${confirmationLink}">Confirmar 
                            cadastro</a>`;

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
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