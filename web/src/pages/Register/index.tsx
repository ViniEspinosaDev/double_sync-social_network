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
                
            </header>

            <form className="containerForms" >
                <img src={logo_quadrada} alt="Double Sync logo" />
                <h1>Cadastro de usuário</h1>

                <div className="form-group">
                <input type="email" name="email" id="email" placeholder="e-mail" className="inputs_form" />
                <br/>
                <input type={typePassword} name="password_first" id="password_first" placeholder="senha" className="inputs_form"/>
                <br/>
                <input type={typePassword} name="password_second" id="password_second" placeholder="confirme a senha" className="inputs_form"/>
                </div>
                
                
                <button type="button" id="btnMostrarOcultarSenha" onClick={changePasswordType} className ="button2">{buttonMessage}</button>
                <br/>
                <br/>
                <span>Já tem uma conta?</span>
                <Link to="/">
                    <span>
                        <FiArrowLeft />
                    </span>
                    <strong>Login</strong>
                    <br/>
                </Link >
                <br/>
                <button type="submit" id="botaoSubmit" className="button1">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Register;