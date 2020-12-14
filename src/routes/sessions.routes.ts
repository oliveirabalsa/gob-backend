import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const autheticateUserService = new AuthenticateUserService();

    const { user } = await autheticateUserService.execute({ email, password });

    return response.status(200).json({ user });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
