import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { listUserController } from "./useCases/ListUser";

const router = Router()

router.get('/health', (request, response) => {
    return response.status(200).send("I'm ON!");
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/users', (request, response) => {
    return listUserController.handle(request, response);
});

export { router }