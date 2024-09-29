import { UserRepository } from '@app/repositories/user';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import User from '@domain/user';

export interface UserGet {
  id: string;
  name: string;
  logo: string;
}

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: User): Promise<string> {
    try {
      if (user instanceof Error) {
        throw new BadRequestException(user.message, {
          cause: user,
          description: user.stack,
        });
      }
      const data = {
        name: user.props.name,
        logo: user.props.logo,
      };

      const { id } = await this.prisma.user.create({
        data,
        select: {
          id: true,
        },
      });

      return id;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  async getUser(): Promise<any[]> {
    return await this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user?.id) {
        return [];
      }
      return user;
    } catch (error: any) {
      throw new BadRequestException('Fornecedor não encontrado!');
    }
  }

  async updateUser(id: string, user: any): Promise<any> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        name: user.name,
        logo: user.logo,
      },
    });
  }

  async deleteUser(id: string): Promise<any> {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new BadRequestException('Erro ao deletar fornecedor!');
    }
  }
}
