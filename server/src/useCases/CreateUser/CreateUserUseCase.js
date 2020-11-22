"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(usersRepository, genericUserCase) {
        this.usersRepository = usersRepository;
        this.genericUserCase = genericUserCase;
    }
    async execute(user) {
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
exports.CreateUserUseCase = CreateUserUseCase;
