import { Router, Request, Response } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

const httpMethods = ['post', 'get', 'put', 'delete'];

for (const httpMethod of httpMethods) {
  routes[httpMethod]('*', (req: Request, res: Response) => {
    return res.send('Invalid endpoint');
  });
}

export default routes;
