import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';

interface ICreatedUser {
  name: string;
  email: string;
  password?: string;
}

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user: ICreatedUser = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return await response.status(200).json(user);
  }
}

export default new UserController();
