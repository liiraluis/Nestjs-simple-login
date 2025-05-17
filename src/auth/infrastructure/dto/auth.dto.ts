import { isNotEmpty, IsNotEmpty, Length } from "class-validator";

export class authDto {
    @IsNotEmpty()
    email: String

    @Length(Number(8))
    password: String
}