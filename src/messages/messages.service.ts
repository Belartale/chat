import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto, ChangeMessageDto } from './messages.dto';
import { Message, MessageDocument } from './schemas/messages.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private messageModel: Model<MessageDocument>,
  ) {}

  async getAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const DateNow = Date.now();
    const newMessage = new this.messageModel({
      ...messageDto,
      createdAt: DateNow,
      updatedAt: DateNow,
    });
    return newMessage.save();
  }

  async remove(IdMessageDto: string): Promise<boolean> {
    return this.messageModel.findByIdAndDelete(IdMessageDto);
  }

  async update(id: string, text: string): Promise<boolean> {
    return this.messageModel.findOneAndUpdate({ _id: id }, { text: text });
    // return this.messageModel.findByIdAndUpdate(obj.id, {
    //   text: obj.text,
    // });
  }
}
