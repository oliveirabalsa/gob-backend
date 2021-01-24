import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import { Request, Response } from 'express';
import CreateUserService from '../modules/users/services/CreateUserService';

interface ICreatedUser {
  name: string;
  email: string;
  password?: string;
}

class UserController {
  public async createUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { name, email, password } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user: ICreatedUser = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return await response.status(200).json(user);
  }
}

export default UserController;
