import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

// Middlewares
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// Controller
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticate);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date().required(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/schedule', providerAppointmentsController.index);

export default appointmentsRouter;
