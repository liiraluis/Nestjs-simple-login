import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class usersDto{
    @IsNotEmpty()
    @IsString()
    username: String;
    
    @IsEmail()
    email: String;

    @IsNotEmpty()
    @Length(Number(8))
    password: String;
}