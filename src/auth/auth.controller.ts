import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './infrastructure/repositories/auth.service';
import { authDto } from './infrastructure/dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('/login')
    login(@Body('loginInfo', new ValidationPipe()) loginInfo: authDto){
        return this.authService.login(loginInfo);
    }
}
