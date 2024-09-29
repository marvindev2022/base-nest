import { UserRepository } from '@app/repositories/user';

export class inMemoryUserRepository implements UserRepository {
  users: any[] = [];

  async createUser(user: any): Promise<any> {
    this.users.push(user);
    if (user instanceof Error) {
      throw new Error(user.message);
    }
    return user;
  }

  async getUser(): Promise<any[]> {
    return this.users;
  }

  async getUserById(id: string): Promise<any> {
    if (!id) {
      throw new Error('Id não informado');
    }
    return this.users.find((user) => user.id === id);
  }

  async updateUser(id: string, user: any): Promise<any> {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
    return user;
  }

  async deleteUser(id: string): Promise<any> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error('Id não encontrado');
    }

    this.users.splice(index, 1);
    return true;
  }
}
