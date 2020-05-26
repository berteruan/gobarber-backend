import { Router } from 'express';

// Configs
import uploadConfig from '@config/upload';

// Contollers
import ProfileController from '../controllers/ProfileController';

// Middleware
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
