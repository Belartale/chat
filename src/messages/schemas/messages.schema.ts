import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//! Promise

//! delete BOOLEAN
//! change BOOLEAN
//! get ARRAY Message
//! create Message
@Schema()
export class Message {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}
export type MessageDocument = Message & Document;
export const MessageSchema = SchemaFactory.createForClass(Message);

// export class CreateMessageDto {
//   readonly username: string;
//   readonly text: string;
// }
