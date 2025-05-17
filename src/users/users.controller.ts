import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { userInfo } from 'os';
import { usersService } from './infrastructure/repositories/users.service';
import { usersDto } from './dto/users.dto';
import { AuthService } from 'src/auth/infrastructure/repositories/auth.service';

@Controller('users')
export class UsersController {
    constructor(
        // Inyectar el servicio
        private readonly userService: usersService,
    ){}

    @Post('/register')
    register(@Body('userInfo', new ValidationPipe()) userInfo: usersDto){
        // Atender la llamada al endpoint con el servicio
        return this.userService.create(userInfo);
    }
}