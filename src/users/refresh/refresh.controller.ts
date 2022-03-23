import { Controller, Param, Get } from '@nestjs/common';
import { RefreshService } from './refresh.service';
import { User } from '../schemas/user.schema';

@Controller('users/refresh')
export class RefreshController {
  constructor(private readonly refreshService: RefreshService) {}

  @Get(':id')
  get(@Param('id') id: number | string): Promise<User> {
    return this.refreshService.get(id);
  }
}
