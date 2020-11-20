import React, { useEffect } from 'react';
import api from '../../../services/api';
import { Link, useLocation } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';

const Confirmation = () => {

    const userId = useLocation().pathname.split('/').pop();

    useEffect(() => {
        api.post(`/register/confirmation/${userId}`);
    }, []);

    return (
        <div className="page-confirmation" >
            <h3>Parabéns! Sua conta foi criada com sucesso.</h3>

            <span>Visitar seu perfil</span>
            <Link to={`/profile/create/${userId}`}>
                <span>
                    <FiPlay />
                </span>
                <strong>Ir</strong>
                <br />
            </Link >
            <br />
        </div>
    );
}

export { Confirmation };