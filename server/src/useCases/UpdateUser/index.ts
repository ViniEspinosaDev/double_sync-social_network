import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { GenericUseCase } from "../Generic/GenericUseCase";
import { EmailTransporterProvider } from "../../providers/implementations/EmailTransporterProvider";
import { AccountStatusEnumValidation } from "../../enums/AccountStatusEnum";

const usersRepository = new UsersRepository();
const emailTransporterProvider = new EmailTransporterProvider();
const accountStatusEnumValidation = new AccountStatusEnumValidation();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const genericUseCase = new GenericUseCase(usersRepository, emailTransporterProvider, accountStatusEnumValidation);

const updateUserController = new UpdateUserController(updateUserUseCase, genericUseCase);

export { genericUseCase, updateUserUseCase, updateUserController };