import { Router } from 'express';

// Middlewares
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// Controller
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticate);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/schedule', providerAppointmentsController.index);

export default appointmentsRouter;
