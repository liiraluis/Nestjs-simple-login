import { Module } from '@nestjs/common';
import { AuthController } from '../auth.controller';
import { AuthService } from './repositories/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { auth, authSchema } from './schema/auth.schema';
import { AuthRepository } from './repositories/auth.repository';
import { user, userSchema } from 'src/users/infrastructure/schema/users.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtStrategy } from '../Strategies/jwt.strat';

@Module({
  imports: [ 
    MongooseModule.forFeature([{ name: auth.name, schema: authSchema }, { name: user.name, schema: userSchema }]),
    JwtModule.registerAsync({
      imports: [ConfigModule], 
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // Obtener el secreto jwt desde el .env
        secret: configService.get<string>('JWT_SECRET'), 
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, jwtStrategy]
})
export class AuthModule {}