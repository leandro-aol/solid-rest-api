import { IUserRepository } from "../../repositories/IUserRepository";
import { IListUserDTO } from "./ListUserDTO";

export class ListUserUseCase {
    constructor(
        private usersRepository: IUserRepository
    ) {}

    async execute(): Promise<IListUserDTO[]> {
        return await this.usersRepository.listUsers();
    }
}