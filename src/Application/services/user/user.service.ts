import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../Infrastructure/Repository/UserRepository';
import { User } from 'src/Infrastructure/Schema/User.schema';
import { HttpService } from '@nestjs/axios';
import { UserDto } from 'src/Application/Dto/User.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    @Inject('USER_CLIENT') private readonly tokenClient: ClientProxy,
    private httpService: HttpService,
  ) {}
  
  async create(data: UserDto): Promise<User> {
    try {
      const result = await this.userRepository.create(data);

      //send RabbitMq Event
      this.sendRabbitMqEvent(result);

      return result;
    } catch (error) {
      throw new BadRequestException({
        error: 'not was possible create a new user',
        description: error,
      });
    }
  }
  private sendRabbitMqEvent(data: User) {
    this.tokenClient.emit('client_create', JSON.stringify(data));
  }

 
  
}
