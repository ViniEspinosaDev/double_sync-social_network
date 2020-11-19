import { User } from "../../entities/Users";
import { AccountStatusEnum } from "../../enums/AccountStatusEnum";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(user: User) {
        var diResult = await this.usersRepository.update(user);

        return diResult;
    }
}