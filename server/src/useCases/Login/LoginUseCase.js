"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
class LoginUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute() {
        // Fazer a criação do token
        return true; // Token
    }
}
exports.LoginUseCase = LoginUseCase;
