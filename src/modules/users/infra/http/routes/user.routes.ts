import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UserRepository from '@modules/users/typeorm/repositories/UsersRepository';
import UserController from '../../../../../controllers/UserController';

const userController = new UserController();

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', userController.createUser);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const usersRepository = new UserRepository();

    const updateUserAvatar = new UpdateUserAvatarService(usersRepository);
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
