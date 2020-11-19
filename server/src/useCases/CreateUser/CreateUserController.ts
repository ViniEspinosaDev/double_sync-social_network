import { Request, Response } from "express";
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

        try {
            await this.createUserUseCase.execute({
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
            })

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }


    }
}