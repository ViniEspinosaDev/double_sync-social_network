import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// BrowserRouter: Forma de fazer roteamento através do browser

import Home from './pages/Home';
import Register from './pages/Register';
import ProfileInfos from './pages/ProfileInfos';

const Routes =  () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={ProfileInfos} path="/profile-infos/:id" />
        </BrowserRouter>
    )
}

export default Routes;