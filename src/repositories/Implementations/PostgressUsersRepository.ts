import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

// Fake repository!! It doesn't use a postgress database. We're just saving data in a users variable
export class PostgressUsersRepository implements IUserRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}