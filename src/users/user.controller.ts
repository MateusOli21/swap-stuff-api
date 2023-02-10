import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dtos/create-user';
import { User } from './dtos/user';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  user(@Param('id') id: string): Promise<User | null> {
    return this.usersService.user(id);
  }

  @Post()
  createUser(@Body() userData: CreateUser) {
    return this.usersService.createUser(userData);
  }
}
