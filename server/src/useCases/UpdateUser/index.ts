import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { GenericUseCase } from "../Generic/GenericUseCase";
import { EmailTransporterProvider } from "../../providers/implementations/EmailTransporterProvider";

const usersRepository = new UsersRepository();
const emailTransporterProvider = new EmailTransporterProvider();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const genericUseCase = new GenericUseCase(usersRepository, emailTransporterProvider);

const updateUserController = new UpdateUserController(updateUserUseCase, genericUseCase);

export { genericUseCase, updateUserUseCase, updateUserController };