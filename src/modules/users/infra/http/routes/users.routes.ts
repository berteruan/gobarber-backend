import { Router } from 'express';
import multer from 'multer';

// Configs
import uploadConfig from '@config/upload';

// Contollers
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

// Middleware
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const usersController = new UsersController();
const userAvatarContoller = new UserAvatarController();
const upload = multer(uploadConfig);

usersRoutes.post('/', usersController.create);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarContoller.update,
);

export default usersRoutes;
