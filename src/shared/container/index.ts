import { container } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';

import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository';
import UsersTokenRepository from '@modules/users/typeorm/repositories/UsersTokenRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokenRepository>(
  'UsersTokenRepository',
  UsersTokenRepository,
);
