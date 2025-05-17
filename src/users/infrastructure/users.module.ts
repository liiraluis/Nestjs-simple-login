import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { user, userSchema } from './schema/users.schema';
import { Model } from 'mongoose';
import { usersService } from './repositories/users.service';
import { UsersController } from '../users.controller';
import { userRepository } from './repositories/users.repository';

@Module({
    imports: [MongooseModule.forFeature([ {name: user.name, schema: userSchema} ])],
    providers: [usersService, userRepository],
    controllers: [UsersController]
})
export class UsersModule {}