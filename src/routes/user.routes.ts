import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import UserController from '../controllers/UserController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const userController = new UserController();

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', userController.createUser);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
