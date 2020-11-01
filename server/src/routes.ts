import express from 'express';

import UsersController from './controllers/usersController'

const routes = express.Router();
const user = new UsersController();

//#region Rotas
routes.post('/cadastro', user.create);
//#endregion

export default routes;