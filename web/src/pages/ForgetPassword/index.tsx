import React, { ChangeEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

const ForgetPassword = () => {

    const userId = useLocation().pathname.split('/').pop();
    const history = useHistory();

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setFormData({ ...formData, password: value });
    }

    function goLoginPage() {
        history.push("/");
    }

    function handleConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setFormData({ ...formData, confirmPassword: value });
    }

    function comparePasswords(password: string, confirmPassword: string) {
        if (password === confirmPassword) {
            return true;
        }

        return false;
    }

    async function handleSubmit() {
        try {
            const equalsPassword = comparePasswords(formData.password, formData.confirmPassword);

            if (!equalsPassword) {
                alert('senhas precisam ser iguais');
                return;
            } else {
                const data = { ...formData, id: userId }
                const updatePassword = await api.put('/forget-password', data)

                alert(updatePassword.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <div>
            <h1>Em breve.</h1>
        </div>
        // <div>
        //     <h2>Esqueci minha senha.</h2>

        //     <p>Senha:</p>
        //     <input type="text" name="password" placeholder="senha" onChange={handlePassword}></input>
        //     <br />
        //     <p>Confirmar Senha:</p>
        //     <input type="text" name="confirmPassword" placeholder="confirmar senha" onChange={handleConfirmPassword}></input>
        //     <br />

        //     <button type="submit" onClick={handleSubmit}></button>

        //     <br />
        //     <button type="button" onClick={goLoginPage}></button>
        // </div>
    );
}

export default ForgetPassword;