import { uuid } from 'uuidv4';

import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository';

import UserToken from '../../typeorm/entities/UserToken.model';

class FakeUsersTokenRepository implements IUsersTokenRepository {
  private usersTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, { id: uuid(), token: uuid(), user_id });

    this.usersTokens.push(userToken);
    return userToken;
  }
}

export default FakeUsersTokenRepository;
