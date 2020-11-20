import { AccountStatusEnumValidation } from "../../enums/AccountStatusEnum";
import { EmailTransporterProvider } from "../../providers/implementations/EmailTransporterProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GenericUseCase } from "../Generic/GenericUseCase";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";
import { LoginValidations } from "./LoginValidations";

const emailTransporterProvider = new EmailTransporterProvider();
const usersRepository = new UsersRepository();
const accountStatusEnumValidation = new AccountStatusEnumValidation();

const genericUseCase = new GenericUseCase(usersRepository, emailTransporterProvider, accountStatusEnumValidation);
const loginUseCase = new LoginUseCase(usersRepository);

const loginValidations = new LoginValidations(genericUseCase);

const loginController = new LoginController(genericUseCase, loginUseCase, loginValidations);

export { loginController, loginUseCase, loginValidations };