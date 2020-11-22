import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export class LoginUseCase {
    constructor(
        private usersRepository: UsersRepository
    ) { }

    async execute() {
        // Fazer a criação do token
        return true; // Token
    }
}