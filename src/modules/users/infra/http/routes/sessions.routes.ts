import { container } from 'tsyringe';
import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autheticateUserService = container.resolve(AuthenticateUserService);

  const { user, token } = await autheticateUserService.execute({
    email,
    password,
  });

  return response.status(200).json({ user, token });
});

export default sessionsRouter;
