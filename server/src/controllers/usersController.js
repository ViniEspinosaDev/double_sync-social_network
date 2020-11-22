"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const knex_1 = __importDefault(require("knex"));
class UsersController {
    // Criar um usuário
    async create(request, response) {
        const { email, password, name, biography, gender, phone, dateRegistered, accountStatus, uf, city } = request.body;
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
        };
        // Fazer inserção no banco
        const usersIds = await knex_1.default('users').insert(user);
        const user_id = usersIds[0];
        // Se deu erro
        if (!user_id) {
            return response.status(400).json({ message: 'Falha ao fazer o cadastro.' });
        }
        // Se deu sucesso
        return response.json(Object.assign({ user_id }, user));
    }
    // Mostar usuário
    async show(request, response) {
        const id = request.params.id;
        const user = await knex_1.default('users').select('*').where('id', id).first;
        return response.json({
            user
        });
    }
}
exports.UsersController = UsersController;
