import { Inject, Injectable } from "@nestjs/common";
import { userRepository } from "./users.repository";
import { usersDto } from "src/users/dto/users.dto";

@Injectable()
export class usersService{
    constructor(
        // Inyectar el repositorio
        @Inject(userRepository)
        private readonly userRepo: userRepository
    ){}

    create(userDto: usersDto){
        // Como se debe interactuar con la BD, usar el repositorio
        return this.userRepo.create(userDto);
    }
}