import { UserRepository } from '@app/repositories/user';
import User from '@domain/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private supplieRepository: UserRepository) {}

  async findUser(): Promise<any[]> {
    return await this.supplieRepository.getUser();
  }

  async findUserById(id: string): Promise<any> {
    return await this.supplieRepository.getUserById(id);
  }

  async create(user: any): Promise<any> {
    const newUser = new User(user);
    return await this.supplieRepository.createUser(newUser);
  }

  async updateUser(id: string, user: any): Promise<any> {
    return await this.supplieRepository.updateUser(id, user);
  }

  async deleteUser(id: string): Promise<any> {
    const response: any = await this.supplieRepository.deleteUser(id);
    if (response instanceof Error) {
      throw new Error(response.message);
    }
    return response;
  }
}
