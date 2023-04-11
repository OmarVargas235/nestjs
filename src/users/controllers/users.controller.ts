import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get('say-hellow')
  getHello(): string {
    return this.usersServices.getHello();
  }
}
