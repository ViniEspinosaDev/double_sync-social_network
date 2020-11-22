"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CreateUser_1 = require("./useCases/CreateUser");
const UpdateUser_1 = require("./useCases/UpdateUser");
const Login_1 = require("./useCases/Login");
const routes = express_1.Router();
exports.routes = routes;
routes.post('/register', (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
routes.put('/profile/create', (request, response) => {
    return UpdateUser_1.updateUserController.handle(request, response);
});
routes.post('/login', (request, response) => {
    return Login_1.loginController.handle(request, response);
});
routes.post('/register/confirmation/:id', (request, response) => {
    var userId = request.params.id;
    request.body = {
        id: userId,
        accountStatus: "E"
    };
    return UpdateUser_1.updateUserController.handle(request, response);
});
routes.post('/profile/settings', (request, response) => {
    return UpdateUser_1.updateUserController.handle(request, response);
});
routes.put('/forget-password', (request, response) => {
    return UpdateUser_1.updateUserController.handle(request, response);
});
