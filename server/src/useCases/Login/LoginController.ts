import { Request, Response } from 'express';
import { User } from '../../entities/Users';
import { GenericUseCase } from '../Generic/GenericUseCase';
import { LoginUseCase } from './LoginUseCase';
import { LoginValidations } from './LoginValidations';

export class LoginController {
    constructor(
        private genericUseCase: GenericUseCase,
        private loginUseCase: LoginUseCase,
        private loginValidations: LoginValidations
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
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
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}