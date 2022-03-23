import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { RegisterModule } from './register/register.module';
import { RefreshModule } from './refresh/refresh.module';

// imports: [
//   RefreshModule,
//   RegisterModule,
//   MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
// ],
@Module({
  imports: [RefreshModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class UsersModule {}
