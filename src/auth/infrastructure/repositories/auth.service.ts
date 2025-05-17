import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthRepository } from './auth.repository';
import { authDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(AuthRepository)
        private readonly authRepo : AuthRepository
    ){}

    login(loginInfo: authDto){
        return this.authRepo.login(loginInfo);
    }
}