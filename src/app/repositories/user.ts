import { EditUserDTO } from '@infra/http/dtos/edit';
import User from '@domain/user';

export abstract class UserRepository {
  abstract createUser(user: User): Promise<string>;
  abstract getUser(): Promise<User[]>;
  abstract getUserById(id: string): Promise<User>;
  abstract updateUser(
    id: string,
    user: EditUserDTO,
  ): Promise<EditUserDTO>;
  abstract deleteUser(id: string): Promise<string>;
}

/*gatewares*/