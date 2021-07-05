// import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
// import User from '../typeorm/entities/User.model';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUsersTokenRepository from '../repositories/IUsersTokenRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UsersTokenRepository')
    private usersTokenRepository: IUsersTokenRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new AppError('User does not exists');
    }

    await this.usersTokenRepository.generate(userExists.id);

    this.mailProvider.sendMail(
      email,
      'Pedido de recuperação de senha recebido!',
    );
  }
}

export default SendForgotPasswordEmailService;
