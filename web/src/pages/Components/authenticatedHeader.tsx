import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

const AuthenticatedHeader = () => {

    const history = useHistory();

    function doLogout() {
        logout();
        history.push("/");
    }

    function goConfigs() {
        history.push("/profile/settings");
    }

    return (
        <header>
            <h1>Cabeçalho da página</h1>

            <div>
                <button type="button" onClick={doLogout}>Logout</button>
                <button type="button" onClick={goConfigs}>Configurações</button>
            </div>
        </header>
    );
}

export default AuthenticatedHeader;