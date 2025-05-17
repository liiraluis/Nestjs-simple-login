import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService)=>({
                // OBTENER LA URI DE LA BD DESDE EL .ENV
                uri: configService.get<string>('DB_URI')
            })
        })
    ]
})
export class MyMongooseModule {}