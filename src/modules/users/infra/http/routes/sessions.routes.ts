import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserRepository from '@modules/users/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const usersRepository = new UserRepository();

  const { email, password } = request.body;

  const autheticateUserService = new AuthenticateUserService(usersRepository);

  const { user, token } = await autheticateUserService.execute({
    email,
    password,
  });

  return response.status(200).json({ user, token });
});

export default sessionsRouter;
