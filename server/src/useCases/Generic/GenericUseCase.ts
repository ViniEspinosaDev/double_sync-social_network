import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GenericUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async getUserByEmail(email: string) {
        var user = await this.usersRepository.getUserByEmail(email);

        return user;
    }

    async getUserById(id: string) {
        var user = await this.usersRepository.getUserById(id);

        return user;
    }
}