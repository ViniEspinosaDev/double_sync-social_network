"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const Users_1 = require("../../entities/Users");
class CreateUserController {
    constructor(createUserUseCase, createUserValidations) {
        this.createUserUseCase = createUserUseCase;
        this.createUserValidations = createUserValidations;
    }
    async handle(request, response) {
        const { name, email, biography, password, confirmPassword, gender, phone, birth, dateRegistered, accountStatus, uf, city } = request.body;
        const user = new Users_1.User(name, email, biography, password, gender, phone, birth, dateRegistered, uf, city);
        try {
            var validationsResult = await this.createUserValidations.doAllValidations(user, confirmPassword);
            if (!validationsResult.isValid()) {
                let errorMessage = validationsResult.getMessage();
                return response.status(400).json({ message: errorMessage });
            }
            await this.createUserUseCase.execute(user);
            const message = 'Usuário criado com sucesso. Confirme a conta através do e-mail cadastrado.';
            return response.status(201).json({ message: message });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
