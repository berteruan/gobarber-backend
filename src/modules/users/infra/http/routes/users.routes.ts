import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

// Configs
import uploadConfig from '@config/upload';

// Contollers
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

// Middleware
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarContoller = new UserAvatarController();
const upload = multer(uploadConfig.multer);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarContoller.update,
);

export default usersRouter;
