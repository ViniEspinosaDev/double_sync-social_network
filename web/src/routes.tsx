import React from 'react';
import { Route, BrowserRouter, Redirect, RouteProps, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

import ProfileInfos from './pages/ProfileInfos';
import { Confirmation } from './pages/Register/Confirmation';

import { isAuthenticated } from "./services/auth";
import PageNotFound from "./pages/PageNotFound";
import NotAuthenticated from './pages/NotAuthenticated';
import Profile from './pages/User/Profile';
import ProfileSettings from './pages/User/Settings';
import ForgetPassword from './pages/ForgetPassword';
import Feedback from './pages/Feedback';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    return isAuthenticated() ? <Route {...props} /> : <Redirect to="/notAuthenticated" ></Redirect>
};

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Register} path="/register" exact />
                <Route component={Feedback} path="/feedback" exact />
                <PrivateRoute component={ProfileInfos} path="/profile/create/:id" exact />
                <Route component={Confirmation} path="/register/confirmation/:id" exact />
                <Route component={NotAuthenticated} path="/notAuthenticated" exact />
                <PrivateRoute component={Profile} path="/profile/:id" exact />
                <PrivateRoute component={ProfileSettings} path="/profile/settings" exact />
                <Route component={ForgetPassword} path="/forget-password/:id" exact />
                <Route component={PageNotFound} path="*" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;