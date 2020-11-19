import { request, response, Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { updateUserController } from './useCases/UpdateUser';

const routes = Router();

routes.post('/register', (request, response) => {
    return createUserController.handle(request, response);
});

routes.post('/register/confirmation/:id', (request, response) => {

    var userId = request.params.id;

    request.body = {
        id: userId,
        accountStatus: "E"
    }
 
    return updateUserController.handle(request, response);
})

routes.post('/security/change-password', (request, response) => {
    return updateUserController.handle(request, response);
});

export { routes };