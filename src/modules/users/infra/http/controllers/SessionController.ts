import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autheticateUserService = container.resolve(AuthenticateUserService);

    const { user, token } = await autheticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json({ user, token });
  }
}

export default new SessionController();
