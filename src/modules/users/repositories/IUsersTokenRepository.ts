import UserToken from '../typeorm/entities/UserToken.model';

export default interface IUsersTokenRepository {
  generate(user_id: string): Promise<UserToken>;
}
