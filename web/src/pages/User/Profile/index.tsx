import React from 'react';
import AuthenticatedHeader from '../../Components/authenticatedHeader';

import './style.css'

const Profile = () => {

    return (
        <div className="profile">
            <AuthenticatedHeader />
            <h1>Em breve...</h1>
            <h4>Futura tela de perfil.</h4>
        </div>
    );
};

export default Profile;