import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiEyeOff, FiEye } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo-horizontal.svg'
import logo_quadrada from '../../assets/logo-quadrada.svg'

const Register = () => {

    const [typePassword, setPasswordType] = useState("password");
    const [buttonMessage, setButtonMessage] = useState("Mostrar");

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

    return (
        <div className="principal">
            <header>
                <img src={logo} alt="Double Sync" />
            </header>

            <form className="containerForms" >
                <img src={logo_quadrada} alt="Double Sync logo" />
                <h1>Cadastro de usuário</h1>

                <input type="email" name="email" id="email" placeholder="e-mail" />
                <input type={typePassword} name="password_first" id="password_first" placeholder="senha" />
                <input type={typePassword} name="password_second" id="password_second" placeholder="confirme a senha" />
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