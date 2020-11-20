import { User } from "../../entities/Users";
import { AccountStatusEnum } from "../../enums/AccountStatusEnum";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(user: User) {
        return await this.usersRepository.update(user);
    }
}