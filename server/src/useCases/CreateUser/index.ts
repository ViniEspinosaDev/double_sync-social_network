import { EmailTransporterProvider } from "../../providers/implementations/EmailTransporterProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GenericUseCase } from "../Generic/GenericUseCase";
import { GenericValidations } from "../Generic/GenericValidations";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidations } from "./CreateUserValidations";

const emailTransporterProvider = new EmailTransporterProvider();
const usersRepository = new UsersRepository();

const genericUseCase = new GenericUseCase(
    usersRepository,
    emailTransporterProvider);

const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    genericUseCase
);


const genericValidations = new GenericValidations(
    genericUseCase,
    usersRepository);

const createUserValidations = new CreateUserValidations(genericUseCase, genericValidations);

const createUserController = new CreateUserController(
    createUserUseCase,
    createUserValidations
);

export { createUserUseCase, createUserController }