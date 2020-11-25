import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../Header';

import './styles.css'

const NotAuthenticated = () => {
    return (
        <div id="not-authenticated">


            <div className="not">
                <Header title="NotAuthenticated"></Header>
                <span>Você precisa estar logado para entrar nessa página. Faça o login</span>
                <Link to="/">
                    <span>
                        <FiArrowLeft />
                    </span>
                    <strong>Login</strong>
                    <br />
                </Link >
            </div>
        </div>
    );
}

export default NotAuthenticated;
