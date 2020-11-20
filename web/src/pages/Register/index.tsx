import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiEyeOff, FiEye } from 'react-icons/fi';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo-horizontal.svg'
import logo_quadrada from '../../assets/logo-quadrada.svg'
import { formatDiagnosticsWithColorAndContext } from 'typescript';



const Register = () => {

    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        status: 'P'
    });

    const [typePassword, setPasswordType] = useState("password");
    const [buttonMessage, setButtonMessage] = useState("Mostrar");
    const [textErrorScreen, setTextErrorScreen] = useState("");

    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        const email = event.target.value;
        setTextErrorScreen("");
        setFormData({ ...formData, email });
    }

    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        const password = event.target.value;
        setFormData({ ...formData, password });
        setTextErrorScreen("");
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
        setTextErrorScreen("");
        console.log(comparePasswords(formData.password, confirmPassword));
    }

    function changePasswordType() {
        if (typePassword === "password") {
            setPasswordType("text");
            setButtonMessage("Esconder")
            setTextErrorScreen("");
        }
        else {
            setPasswordType("password");
            setButtonMessage("Mostrar")
            setTextErrorScreen("");
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await api.post('/register', formData);
            console.log(response);

            const { message } = response.data;

            alert(message);

            if (response.status === 201) {
                history.push('/');
            }
        } catch (error) {
            setTextErrorScreen(error.response.data.message);
        }
    }

    return (
        <div className="principal">
            <header>

            </header>

            <form className="containerForms" method="POST">
                <img src={logo_quadrada} alt="Double Sync logo" />
                <h1>Cadastro de usuário</h1>


                <div className="form-group">
                    <input type="text" name="email" id="email" placeholder="e-mail" className="inputs_form" onChange={handleEmail} />
                    <br />
                    <input type={typePassword} name="password_first" id="password_first" placeholder="senha" className="inputs_form" onChange={handlePassword} />
                    <br />
                    <input type={typePassword} name="password_second" id="password_second" placeholder="confirme a senha" className="inputs_form" onChange={handleConfirmPassword} />
                    <br />
                    <p id="errorText" >{textErrorScreen}</p>
                </div>


                <button type="button" id="btnMostrarOcultarSenha" onClick={changePasswordType} className="button2">{buttonMessage}</button>
                <br />
                <br />

                <span>Já tem uma conta?</span>
                <Link to="/">
                    <span>
                        <FiArrowLeft />
                    </span>
                    <strong>Login</strong>
                    <br />
                </Link >
                <br />
                <button type="submit" id="botaoSubmit" className="button1" onClick={handleSubmit}>
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Register;