import { User } from "../../entities/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { GenericUseCase } from "../Generic/GenericUseCase";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private genericUserCase: GenericUseCase
    ) { }

    async execute(user: User) {
        const userAlreadyExists = await this.usersRepository.findByEmail(user.email);

        if (userAlreadyExists) {
            throw new Error('Este e-mail já está em uso. Faça o login.');
        }

        await this.usersRepository.save(user);

        const confirmationLink = `http://localhost:3000/register/confirmation/${user.id}`;
        const emailBody = `<p>Olá, estamos quase lá. Para confirmar sua 
                            conta clique no seguinte link.<p><br/><a href="${confirmationLink}">Confirmar 
                            cadastro</a>`;

        await this.genericUserCase.sendConfirmationEmail(user, emailBody);
    }
}