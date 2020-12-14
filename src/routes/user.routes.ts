import { Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const usersRouter = Router();

usersRouter.post('/', userController.createUser);

export default usersRouter;
