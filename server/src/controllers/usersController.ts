import { Response, Request } from 'express';
import knex from '../database/connection';

class UsersController {

    // Criar um usuário
    async create(request: Request, response: Response) {
        const {
            email,
            password,
            name,
            biography,
            gender,
            phone,
            dateRegistered,
            accountStatus,
            uf,
            city
        } = request.body;

        // Atributos do usuário
        const user = {
            email,
            password,
            name,
            biography,
            gender,
            phone,
            dateRegistered,
            accountStatus,
            uf,
            city
        }

        // Fazer inserção no banco
        const usersIds = await knex('users').insert(user);
        const user_id = usersIds[0];

        // Se deu erro
        if(!user_id){
            return response.status(400).json({ message: 'Falha ao fazer o cadastro.' });
        }

        // Se deu sucesso
        return response.json({
            user_id,
            ...user
        });
    }

    // Mostar usuário
    async show(request: Request, response: Response){
        const id = request.params.id;

        const user = await knex('users').select('*').where('id', id).first;

        return response.json({
            user
        });
    }
}

export default UsersController;