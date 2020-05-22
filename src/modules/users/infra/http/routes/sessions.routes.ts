import { Router } from 'express';
import { container } from 'tsyringe';

// Controllers
import SessionsController from '../controllers/SessionsController';

const sessionsRoutes = Router();
const sessionsController = new SessionsController();

sessionsRoutes.post('/', sessionsController.create);

export default sessionsRoutes;
