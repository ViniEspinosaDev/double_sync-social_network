import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { GenericUseCase } from "../Generic/GenericUseCase";

const usersRepository = new UsersRepository();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const genericUseCase = new GenericUseCase(usersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase, genericUseCase);

export { genericUseCase, updateUserUseCase, updateUserController };