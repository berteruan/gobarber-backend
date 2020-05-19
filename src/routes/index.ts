import { Router } from 'express';

// Routers
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
