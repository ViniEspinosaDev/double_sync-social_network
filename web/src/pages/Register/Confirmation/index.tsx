import React, { useEffect } from 'react';
import api from '../../../services/api';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {

    const userId = useLocation().pathname.split('/').pop();

    useEffect(() => {
        api.post(`/register/confirmation/${userId}`);
    }, []);

    return (
        <div className="page-confirmation" >
            <h3> Conta confirmada com sucesso </h3>
        </div>
    );
}

export { Confirmation };