import { MailtrapMailProvider } from '../../providers/Implementations/MailtrapMailProvider';
import { PostgressUsersRepository } from '../../repositories/Implementations/PostgressUsersRepository';
import { CreateUserController } from '../../useCases/CreateUser/CreateUserController';
import { CreateUserUseCase } from '../../useCases/CreateUser/CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgressUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailtrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase,
);

export { createUserUseCase, createUserController }