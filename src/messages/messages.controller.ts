import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMessageDto, ChangeMessageDto } from './messages.dto';
import { MessagesService } from './messages.service';
import { Message } from './schemas/messages.schema';

@Controller('messages')
export class MessagesController {
  constructor(private readonly MessagesService: MessagesService) {}

  @Get()
  getAll(): Promise<Message[]> {
    return this.MessagesService.getAll();
  }

  @Post()
  create(@Body() CreateMessageDto: CreateMessageDto): Promise<Message> {
    return this.MessagesService.create(CreateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.MessagesService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('text') text: string,
  ): Promise<boolean> {
    return this.MessagesService.update(id, text);
  }
}
