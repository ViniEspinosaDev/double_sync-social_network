"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidations = void 0;
const DIResult_1 = require("../../entities/DIResult");
class LoginValidations {
    constructor(genericUseCase) {
        this.genericUseCase = genericUseCase;
    }
    async doAllValidations(email, password) {
        let diResult = new DIResult_1.DIResult();
        // - Validar se e-mail ou password vazio
        let emailOrPasswordIsEmpty = await this.genericUseCase.emailPasswordAreEmpty(email, password);
        if (emailOrPasswordIsEmpty) {
            let messageError = 'E-mail ou senha vazio.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }
        // - Validar se e-mail é válido
        let isValidEmail = await this.genericUseCase.validEmail(email);
        if (!isValidEmail) {
            let messageError = 'E-mail inválido.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }
        // - Validar se e-mail está cadastrado no banco
        let emailAlreadyRegistered = await this.genericUseCase.emailAlreadyRegistered(email);
        if (!emailAlreadyRegistered) {
            let messageError = 'Esse e-mail não está cadastrado.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }
        // - Verificar se o cadastro do usuário está ativo
        let userIsActivated = await this.genericUseCase.userIsActive(email);
        if (!userIsActivated) {
            let messageError = 'Usuário não está ativo. Verifique seu e-mail.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }
        // - Verificar se a senha está correta
        let isCorrectPassword = await this.genericUseCase.getUserByPassword(email, password);
        if (!isCorrectPassword) {
            let messageError = 'Senha incorreta.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }
        return diResult;
    }
    async profileHasCreated(email) {
        let user = await this.genericUseCase.getUserByEmail(email);
        if (user.name === '' || user.name == null) {
            return false;
        }
        return true;
    }
}
exports.LoginValidations = LoginValidations;
