"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(user) {
        return await this.usersRepository.update(user);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
