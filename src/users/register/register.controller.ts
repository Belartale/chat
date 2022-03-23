import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users.dto';
import { RegisterService } from './register.service';
import { User } from '../schemas/user.schema';

@Controller('users/register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.registerService.create(createUserDto);
  }
}
