import { Request, Response } from 'express';
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { GenericUseCase } from "../Generic/GenericUseCase";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase,
        private genericUseCase: GenericUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            name,
            email,
            biography,
            password,
            gender,
            phone,
            birth,
            accountStatus,
            uf,
            city
        } = request.body;

        try {

            let user;

            if (id !== '') {
                user = await this.genericUseCase.getUserById(id);
            } else {
                user = await this.genericUseCase.getUserByEmail(email);
            }

            if (!user) {
                return response.status(404).json({ message: 'Usuário não encontrado.' });
            }

            user.name = name === '' ? user.name : name;
            user.biography = biography === '' ? user.biography : biography;
            user.password = password === '' ? user.password : password;
            user.accountStatus = accountStatus == '' ? user.accountStatus : accountStatus;
            user.gender = gender === '' ? user.gender : gender;
            user.phone = phone === '' ? user.phone : phone;
            user.birth = birth == '' ? user.birth : birth;
            user.uf = uf === '' ? user.uf : uf;
            user.city = city === '' ? user.city : city;

            await this.updateUserUseCase.execute(user);

            return response.status(201).json({ message: 'Atualizado' });
        } catch (error) {
            return response.status(400).json({
                message: 'Erro inesperado.'
            });
        }
    }
}