import { User } from "../../entities/Users";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GenericUseCase } from "./GenericUseCase";

export class GenericValidations {
    constructor(
        private genericUseCases: GenericUseCase,
        private usersRepository: UsersRepository
    ) { }

    async validEmail(email: string): Promise<boolean> {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return true;
        }
        return false;
    }

    async emailPasswordAreEmpty(user: User): Promise<boolean> {
        if (user.email === '' || user.password === '')
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
}