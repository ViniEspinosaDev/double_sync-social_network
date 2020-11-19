import { EmailTransporterProvider } from "../../providers/implementations/EmailTransporterProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const emailTransporterProvider = new EmailTransporterProvider();
const usersRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    emailTransporterProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }