import { request, response, Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { updateUserController } from './useCases/UpdateUser';
import { loginController } from './useCases/Login'

const routes = Router();

routes.post('/register', (request, response) => {
    return createUserController.handle(request, response);
});

routes.put('/profile/create', (request, response) => {
    return updateUserController.handle(request, response);
});

routes.post('/login', (request, response) => {
    return loginController.handle(request, response);
});

routes.post('/register/confirmation/:id', (request, response) => {

    var userId = request.params.id;

    request.body = {
        id: userId,
        accountStatus: "E"
    }

    return updateUserController.handle(request, response);
})

routes.post('/profile/settings', (request, response) => {
    return updateUserController.handle(request, response);
});

routes.put('/forget-password', (request, response) => {
    return updateUserController.handle(request, response);
});

export { routes };