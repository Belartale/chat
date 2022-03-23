import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RefreshService } from './refresh.service';
import { User, UserSchema } from '../schemas/user.schema';
import { RefreshController } from './refresh.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [RefreshController],
  providers: [RefreshService],
})
export class RefreshModule {}
