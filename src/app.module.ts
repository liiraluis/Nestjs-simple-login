import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyMongooseModule } from './mongoose/mongoose.module';
import { UsersModule } from './users/infrastructure/users.module';
import { AuthModule } from './auth/infrastructure/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule para leer variables del .env
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    // myMoongoseModule es el modulo de Mongoose configurado para la app
    MyMongooseModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}