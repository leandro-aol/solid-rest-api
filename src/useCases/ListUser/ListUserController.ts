import { Request, Response } from "express";
import { User } from "../../entities/User";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
    constructor(
        private listUserUseCase: ListUserUseCase,
    ) {
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users: User[] = await this.listUserUseCase.execute();
            console.log(users);
            return response.status(200).json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.',
            })
        }
    }
}