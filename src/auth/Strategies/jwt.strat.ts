import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt } from 'passport-jwt'
import { AuthService } from "../infrastructure/repositories/auth.service"
import { usersService } from "src/users/infrastructure/repositories/users.service"
import { ConfigService } from "@nestjs/config"
import { Inject, Injectable } from "@nestjs/common"


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(
        @Inject(ConfigService)
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET'),
        })
    }

    async validate(payload: any) {
        return {id: payload.sub, username: payload.username, email: payload.email };
    }
}