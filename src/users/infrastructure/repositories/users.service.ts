import { HttpException, Inject, Injectable } from "@nestjs/common";
import { userRepository } from "./users.repository";
import { usersDto } from "src/users/dto/users.dto";

@Injectable()
export class usersService{
    constructor(
        // Inyectar el repositorio
        @Inject(userRepository)
        private readonly userRepo: userRepository
    ){}

    async create(userDto: usersDto){
        const posible_user = await this.userRepo.findOne({email: userDto.email});
        if(posible_user)
            throw new HttpException('Error al registrar este usuario: un usuario con el mismo correo electronico ya existe.', 400)

        return this.userRepo.create(userDto);
    }
}