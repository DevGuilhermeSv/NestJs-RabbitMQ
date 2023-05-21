import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UserService } from '../../../Application/services/user/user.service';
import { User } from '../../../Infrastructure/Schema/User.schema';
import { UserDto } from '../../../Application/Dto/User.dto';

@Controller('api')
export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }
  

  @Post('/users')
  async createUser(@Body() user: UserDto): Promise<User> {
    const result = await this.userService.create(user);
    return result;
  }

  
}
