import { Router } from 'express';

// Middlewares
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// Controller
import AppointmentsController from '../controllers/AppointmentsContoller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticate);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
