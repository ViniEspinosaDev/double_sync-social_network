import express from 'express';

import UsersController from './controllers/usersController'

const routes = express.Router();
const user = new UsersController();

//#region Rotas
routes.post('/register', user.create);

routes.get('register/:id', user.show);

//#endregion

export default routes;