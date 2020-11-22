"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
class LoginController {
    constructor(genericUseCase, loginUseCase, loginValidations) {
        this.genericUseCase = genericUseCase;
        this.loginUseCase = loginUseCase;
        this.loginValidations = loginValidations;
    }
    async handle(request, response) {
        const { email, password } = request.body;
        try {
            // Fazer todas validações de login
            let validationResult = await this.loginValidations.doAllValidations(email, password);
            // Verificar se validação teve erro
            if (!validationResult.isValid()) {
                let errorMessage = validationResult.getMessage();
                return response.status(400).json({ message: errorMessage });
            }
            // Verifica se usuário já criou o perfil dele
            let verifyProfileHasCreated = await this.loginValidations.profileHasCreated(email);
            let userId = (await this.genericUseCase.getUserByEmail(email)).id;
            // Se passar pelas validações, chamar a LoginUseCase com o token
            //let token = await this.loginUseCase.execute();
            let token = userId;
            return response.status(201).json({ token: token, profileCreated: verifyProfileHasCreated, message: 'Logado', userId: userId });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}
exports.LoginController = LoginController;
