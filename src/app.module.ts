import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// 'mongodb://localhost:27017'
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    UsersModule,
    MessagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://belartale-chat-admin:belartale-chat-admin@cluster0.pxgec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
