import { postgressUsersRepository } from '../index';
import { MailtrapMailProvider } from '../../providers/Implementations/MailtrapMailProvider';
// import { PostgressUsersRepository } from '../../repositories/Implementations/PostgressUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
// const postgressUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailtrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase,
);

export { createUserUseCase, createUserController }