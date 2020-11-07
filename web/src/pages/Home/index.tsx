import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo_horizontal from '../../assets/logo-horizontal.svg';
import logo_quadrada from '../../assets/logo-quadrada.svg';

const Home = () => {
    return (
        <div className="page-home">
            <div className="content">
                <header>
                    <img src={logo_horizontal} alt="double sync logo" />
                </header>

                <main>
                    <h1>Cadastre-se já</h1>
                    <p>Faça missões e desbloqueie conquistas</p>

                    <Link to="/register">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastrar-se</strong>
                    </Link >
                </main>

                <div className="page-login">
                    <form className="form-login">
                        <img src={logo_quadrada} alt="double sync logo square" />
                        <h2>Entrar</h2>

                        <input type="email" name="email" id="email" placeholder="e-mail" />
                        <input type="password" name="password" placeholder="senha" />

                        <Link to="/forget-password">
                            <p>Esqueci minha senha</p>
                        </Link>

                        <Link to="/login/home-page">

                            <button type="button">Entrar</button>
                        </Link >
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;