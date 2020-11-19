import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// BrowserRouter: Forma de fazer roteamento através do browser

import Home from './pages/Home';
import Register from './pages/Register';

import ProfileInfos from './pages/ProfileInfos';
import { Confirmation } from './pages/Register/Confirmation';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Register} path="/register" exact />
            <Route component={ProfileInfos} path="/register/profile-info" exact />
            <Route component={Confirmation} path="/register/confirmation/:id" exact />
        </BrowserRouter>
    )
}

export default Routes;