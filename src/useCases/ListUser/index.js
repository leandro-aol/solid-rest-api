import { postgressUsersRepository } from '../index';
// import { PostgressUsersRepository } from '../../repositories/Implementations/PostgressUsersRepository';
import { ListUserController } from './ListUserController';
import { ListUserUseCase } from './ListUserUseCase';

// const postgressUsersRepository = new PostgressUsersRepository();

const listUserUseCase = new ListUserUseCase(postgressUsersRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController }