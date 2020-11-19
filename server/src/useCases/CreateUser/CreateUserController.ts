import { Request, Response } from "express";
import { User } from "../../entities/Users";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            email,
            biography,
            password,
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
            await this.createUserUseCase.execute(user);

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}