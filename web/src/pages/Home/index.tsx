import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

import './styles.css';

import logo_quadrada from '../../assets/logo-quadrada.svg';
import api from '../../services/api';

const Home = () => {

    const history = useHistory();

    const [textErrorLabel, setTextErrorLabel] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleFormDataEmail(event: ChangeEvent<HTMLInputElement>) {
        const email = event.target.value;
        setFormData({ ...formData, email });
        setTextErrorLabel("");
    }

    function handleFormDataPassword(event: ChangeEvent<HTMLInputElement>) {
        const password = event.target.value;
        setFormData({ ...formData, password });
        setTextErrorLabel("");
    }

    async function HandleSubmitLogin(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await api.post('/login', formData);
            let { token, userId, profileCreated } = response.data;
            console.log(response);

            // Precisa pegar o token e definir no localStorage xD
            console.log(profileCreated)
            // Se o perfil ainda não estiver criado
            if (!profileCreated) {
                history.push(`/profile/create/${userId}`);
            } else {
                //-Redireciona ele para a página de login /login/home-page
                history.push(`/profile/${userId}`);
            }
        } catch (error) {
            setTextErrorLabel(error.response.data.message);
        }
    }

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

                            <form className="form-login" onSubmit={HandleSubmitLogin}>
                                <div className="logo-form">
                                    <img src={logo_quadrada} alt="double sync logo square" className="logo-form" />
                                </div>

                                <h2>Entrar</h2>
                                <div className="form-group">
                                    <input type="text" name="email" id="email" placeholder="e-mail" onChange={handleFormDataEmail} />
                                    <input type="password" name="password" placeholder="senha" onChange={handleFormDataPassword} />
                                    <p id="errorText" >{textErrorLabel}</p>
                                </div>

                                <Link to="/forget-password">
                                    <p>Esqueci minha senha</p>
                                </Link>

                                {/* <Link to="/login/home-page"> */}
                                <Button color="primary" type="submit" >Entrar</Button>
                                {/* </Link > */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;