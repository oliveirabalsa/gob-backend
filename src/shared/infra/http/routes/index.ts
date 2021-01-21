import { Router, Request, Response } from 'express';

import appointmentsRouter from '@modules/appointments/infra/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

const httpMethods = ['post', 'get', 'put', 'delete'];

for (const httpMethod of httpMethods) {
  routes[httpMethod]('*', (req: Request, res: Response) => {
    return res.send('Invalid endpoint');
  });
}

export default routes;
