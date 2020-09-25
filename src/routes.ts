import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.get('/health', (request, response) => {
    return response.status(200).send("I'm ON!");
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

export { router }