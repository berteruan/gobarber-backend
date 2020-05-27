import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

// Middlewares
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// Controller
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityCotronller from '../controllers/ProviderMonthAvailabilityCotronller';
import ProviderDayAvailabilityCotronller from '../controllers/ProviderDayAvailabilityCotronller';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityCotronller = new ProviderMonthAvailabilityCotronller();
const providerDayAvailabilityCotronller = new ProviderDayAvailabilityCotronller();

providersRouter.use(ensureAuthenticate);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailabilityCotronller.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailabilityCotronller.index,
);

export default providersRouter;
