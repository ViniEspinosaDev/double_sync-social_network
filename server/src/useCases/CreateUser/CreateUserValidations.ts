import { DIResult } from "../../entities/DIResult";
import { User } from "../../entities/Users";
import { GenericUseCase } from "../Generic/GenericUseCase";
import { GenericValidations } from "../Generic/GenericValidations";

export class CreateUserValidations {
    constructor(
        private genericUseCases: GenericUseCase,
        private genericValidations: GenericValidations
    ) { }

    async doAllValidations(user: User, confirmPassword: string): Promise<DIResult> {

        let diResult = new DIResult();

        const validEmail = await this.genericValidations.validEmail(user.email);
        if(!validEmail){
            let messageError = 'E-mail inválido.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }

        const emailPasswordEmpty = await this.genericValidations.emailPasswordAreEmpty(user);
        if (emailPasswordEmpty) {
            let messageError = 'E-mail ou senha vazio.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }

        // Validar se confirmar senha é igual
        const verifyPasswordsAreEquals = await this.genericValidations.passwordsAreEquals(user.password, confirmPassword);
        if (!verifyPasswordsAreEquals) {
            let messageError = 'As senhas não são iguais.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }

        // Validar se email já está cadastrado
        const emailsExists = await this.genericValidations.emailAlreadyRegistered(user.email);
        if (emailsExists) {
            let messageError = 'Esse e-mail já está cadastrado.';
            diResult.addMessageError(400, messageError);
            return diResult;
        }

        return diResult;
    }
}