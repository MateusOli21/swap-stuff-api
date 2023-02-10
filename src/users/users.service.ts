import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUser } from './dtos/create-user';
import { User } from './dtos/user';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(id: string): Promise<User | null> {
    try {
      const findUser = await this.prisma.user.findFirstOrThrow({
        where: { id }
      });
      return findUser;
    } catch (e) {
      console.log('Error', e);
    }
  }

  async createUser(data: CreateUser): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    });
  }
}
