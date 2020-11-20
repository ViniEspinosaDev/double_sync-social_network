import { DIResult } from "../../entities/DIResult";
import { User } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";
import { connection } from '../../database/connection';

export class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<Boolean> {
        var userData: User[] = await connection('users').select('*').where('email', email);

        if (userData.toString() === '') {
            return false;
        }

        return true;
    }

    async getUserByEmail(email: string): Promise<User> {
        var userData: User[] = await connection('users').select('*').where('email', email);
        return userData[0];
    }

    async getUserByPassword(email: string, password: string): Promise<User> {
        var userData: User[] = await connection('users').select('*').where('email', email).where('password', password);
        return userData[0];
    }

    async getUserById(id: string): Promise<User> {
        var userData: User[] = await connection('users').select('*').where('id', id);
        return userData[0];
    }

    async save(user: User): Promise<DIResult> {
        var diResult = new DIResult();
        const userCorrectly = {
            id: user.id,
            name: user.name,
            email: user.email,
            biography: user.biography,
            password: user.password,
            gender: user.gender,
            phone: user.phone,
            birth: user.birth,
            dateRegistered: user.dateRegistered,
            accountStatus: user.accountStatus,
            uf: user.uf,
            city: user.city
        }

        const usersIds = await connection('users').insert(userCorrectly);
        diResult.ids = usersIds;

        if (!usersIds[0]) {
            let messageError = 'Não foi possível criar o novo usuário.';
            diResult.addMessageError(400, messageError);
        }

        return diResult;
    }

    async update(user: User): Promise<DIResult> {
        var diResult = new DIResult();
        var updateResult = await connection('users')
            .where('id', '=', user.id)
            .update({
                'name': user.name,
                'email': user.email,
                'biography': user.biography,
                'password': user.password,
                'gender': user.gender,
                'phone': user.phone,
                'birth': user.birth,
                'dateRegistered': user.dateRegistered,
                'accountStatus': user.accountStatus,
                'uf': user.uf,
                'city': user.city
            });

        if (updateResult !== 1) {
            let messageError = 'Falha ao atualizar cadastro de usuário.';
            diResult.addMessageError(400, messageError);
        }

        return diResult;
    }
}