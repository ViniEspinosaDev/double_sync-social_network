import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './styles.css';

import logo_horizontal from '../../assets/logo-horizontal.svg';
import logo_quadrada from '../../assets/logo-quadrada.svg';

const Home = () => {
    return (
        <div className="page-home">
            <div className="content">
                <header className="header">

                </header>
                <div className="row">
                    <div className="col-sm-6">
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
                    </div>

                    <div className="col-sm-6">
                        <div className="page-login">

                            <form className="form-login">
                                <div className="logo-form">
                                    <img src={logo_quadrada} alt="double sync logo square" className="logo-form" />
                                </div>

                                <h2>Entrar</h2>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="e-mail" />
                                    <input type="password" name="password" placeholder="senha" />
                                </div>

                                <Link to="/forget-password">
                                    <p>Esqueci minha senha</p>
                                </Link>

                                <Link to="/login/home-page">

                                    <Button color="primary" type="button">Entrar</Button>
                                </Link >
                            </form>



                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Home;