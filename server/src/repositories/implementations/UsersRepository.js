"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const DIResult_1 = require("../../entities/DIResult");
const connection_1 = require("../../database/connection");
class UsersRepository {
    async findByEmail(email) {
        var userData = await connection_1.connection('users').select('*').where('email', email);
        if (userData.toString() === '') {
            return false;
        }
        return true;
    }
    async getUserByEmail(email) {
        var userData = await connection_1.connection('users').select('*').where('email', email);
        return userData[0];
    }
    async getUserByPassword(email, password) {
        var userData = await connection_1.connection('users').select('*').where('email', email).where('password', password);
        return userData[0];
    }
    async getUserById(id) {
        var userData = await connection_1.connection('users').select('*').where('id', id);
        return userData[0];
    }
    async save(user) {
        var diResult = new DIResult_1.DIResult();
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
        };
        const usersIds = await connection_1.connection('users').insert(userCorrectly);
        diResult.ids = usersIds;
        if (!usersIds[0]) {
            let messageError = 'Não foi possível criar o novo usuário.';
            diResult.addMessageError(400, messageError);
        }
        return diResult;
    }
    async update(user) {
        var diResult = new DIResult_1.DIResult();
        var updateResult = await connection_1.connection('users')
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
exports.UsersRepository = UsersRepository;
