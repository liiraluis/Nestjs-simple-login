import { HttpException, Injectable } from "@nestjs/common";
import { authDto } from "../dto/auth.dto";
import * as bcrypt from 'bcrypt';
import { user } from "src/users/infrastructure/schema/users.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthRepository {
    constructor(
        @InjectModel(user.name)
        private readonly userModel: Model<user>,
        private readonly jwtService: JwtService
    ){}

    async login(loginInfo: authDto){
        const user = await this.userModel.findOne({email: loginInfo.email}).exec();
        if(!user)
            throw new HttpException(`Credenciales incorrectas`, 404);
        const login = await bcrypt.compare(loginInfo.password.toString(), user.password.toString());
        
        const payload = {
            id:       user.id,
            username: user.username,
            email:    user.email
        }

        const token = this.jwtService.sign(payload);

        return login ? {...payload, token} : new HttpException('Credenciales incorrectas', 404);
    }
}