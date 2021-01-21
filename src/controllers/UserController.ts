import { Request, Response } from 'express';
import CreateUserService from '../modules/users/services/CreateUserService';

interface UserCreated {
  name: string;
  email: string;
  password?: string;
}
class UserController {
  public async createUser(request: Request, response: Response): Promise<any> {
    try {
      const { name, email, password } = request.body;

      const createUser = new CreateUserService();

      const user: UserCreated = await createUser.execute({
        name,
        email,
        password,
      });

      delete user.password;

      return await response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
