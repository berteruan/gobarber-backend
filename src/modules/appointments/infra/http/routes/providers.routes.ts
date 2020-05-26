import { Router } from 'express';

// Middlewares
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// Controller
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticate);

providersRouter.get('/', providersController.index);

export default providersRouter;
