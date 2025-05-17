import { Int32, Model } from "mongoose";
import { user } from "../schema/users.schema";
import { InjectModel } from "@nestjs/mongoose";
import { usersDto } from "src/users/dto/users.dto";
import { HttpException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { ConfigService } from "@nestjs/config";

export class userRepository{
    constructor(
        // Inyectar el modelo
        @InjectModel(user.name)
        private readonly userModel: Model<user>,
        private readonly configService: ConfigService
    ) {}

    async create(userDto: usersDto): Promise<user>{
        // Hashear el password con Bcrypt. Leyendo el numero de pasadas del algoritmo desde el .env
        const n_hash = this.configService.get<string>('N_HASH');
        userDto.password = await bcrypt.hash(userDto.password.toString(), n_hash ? n_hash : 8 );
        try{
            const new_user = await this.userModel.create(userDto);
            return new_user.save();
        }catch(e){
            throw new HttpException(`Ocurrio un error al registrar el usuario: ${e}`, 500)
        }
    }
}