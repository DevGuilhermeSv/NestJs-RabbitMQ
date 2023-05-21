import { Module } from '@nestjs/common';
import { UserController } from '../Adapter/Controllers/user/User.controller';
import { UserService } from './services/user/user.service';
import { UserRepository } from '../Infrastructure/Repository/UserRepository';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../Infrastructure/Schema/User.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ClientsModule.register([{ name: 'USER_CLIENT', transport: Transport.RMQ }]),
    HttpModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
