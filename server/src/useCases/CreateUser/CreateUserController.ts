import { Request, Response } from "express";
import { User } from "../../entities/Users";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidations } from "./CreateUserValidations";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private createUserValidations: CreateUserValidations
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            email,
            biography,
            password,
            confirmPassword,
            gender,
            phone,
            birth,
            dateRegistered,
            accountStatus,
            uf,
            city
        } = request.body;

        const user = new User(name, email, biography, password, gender, phone, birth, dateRegistered, uf, city);

        try {
            var validationsResult = await this.createUserValidations.doAllValidations(user, confirmPassword);

            if (!validationsResult.isValid()) {
                let errorMessage = validationsResult.getMessage();
                return response.status(400).json({ message: errorMessage });
            }

            await this.createUserUseCase.execute(user);

            const message = 'Usuário criado com sucesso. Confirme a conta através do e-mail cadastrado.';
            return response.status(201).json({ message: message });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}