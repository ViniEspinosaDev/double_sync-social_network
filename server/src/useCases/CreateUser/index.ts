import { AccountStatusEnumValidation } from "../../enums/AccountStatusEnum";
import { EmailTransporterProvider } from "../../providers/implementations/EmailTransporterProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GenericUseCase } from "../Generic/GenericUseCase";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidations } from "./CreateUserValidations";

const emailTransporterProvider = new EmailTransporterProvider();
const usersRepository = new UsersRepository();
const accountStatusEnumValidation = new AccountStatusEnumValidation();

const genericUseCase = new GenericUseCase(
    usersRepository,
    emailTransporterProvider,
    accountStatusEnumValidation);

const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    genericUseCase
);

const createUserValidations = new CreateUserValidations(genericUseCase);

const createUserController = new CreateUserController(
    createUserUseCase,
    createUserValidations
);

export { createUserUseCase, createUserController }