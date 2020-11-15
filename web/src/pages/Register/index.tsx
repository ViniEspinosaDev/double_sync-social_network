import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiEyeOff, FiEye } from 'react-icons/fi';
import api from '../../services/api';
//import { useHistory } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo-horizontal.svg'
import logo_quadrada from '../../assets/logo-quadrada.svg'

//const history = useHistory();

const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        status: ''
    });

    const [typePassword, setPasswordType] = useState("password");
    const [buttonMessage, setButtonMessage] = useState("Mostrar");

    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        const email = event.target.value;
        setFormData({ ...formData, email });
    }

    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        const password = event.target.value;
        setFormData({ ...formData, password });

        console.log(comparePasswords(password, formData.confirmPassword));
    }

    function comparePasswords(password: string, confirmPassword: string) {
        let stringResult = '';

        if (password === '' && confirmPassword === '') {
            stringResult = 'Vazio.'
        } else if (password === confirmPassword) {
            stringResult = 'Senhas são iguais.';
        } else {
            stringResult = 'Senhas são diferentes.';
        }

        return stringResult;
    }

    function handleConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
        const confirmPassword = event.target.value;
        setFormData({ ...formData, confirmPassword });

        console.log(comparePasswords(formData.password, confirmPassword));
    }



    function changePasswordType() {
        if (typePassword === "password") {
            setPasswordType("text");
            setButtonMessage("Esconder")
        }
        else {
            setPasswordType("password");
            setButtonMessage("Mostrar")
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { email, password, status } = formData;
        const data = {
            email,
            password,
            status
        }

        console.log(formData);
        const id = await api.put('', data);

        if (id) {
            alert('Cadastro atualizado com sucesso.');
        }
        else {
            alert('Ops... Algo deu errado na atualização do cadastro :(');
        }

        //Colocar a rota da tela de perfil ou feed de noticias :)
        //history.push('/');
    }

    return (
        <div className="principal">
            <header>
                <img src={logo} alt="Double Sync" />
            </header>

            <form className="containerForms" method="POST">
                <img src={logo_quadrada} alt="Double Sync logo" />
                <h1>Cadastro de usuário</h1>

                <input type="email" name="email" id="email" placeholder="e-mail" onChange={handleEmail}/>
                <input type={typePassword} name="password_first" id="password_first" placeholder="senha" onChange={handlePassword} />
                <input type={typePassword} name="password_second" id="password_second" placeholder="confirme a senha" onChange={handleConfirmPassword} />
                <br />
                <button type="button" id="btnMostrarOcultarSenha" onClick={changePasswordType}>{buttonMessage}</button>

                <span>Já tem uma conta?</span>
                <Link to="/">
                    <span>
                        <FiArrowLeft />
                    </span>
                    <strong>Login</strong>
                </Link >

                <button type="submit" id="botaoSubmit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Register;