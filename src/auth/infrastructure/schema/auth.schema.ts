import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class auth{

}

export const authSchema = SchemaFactory.createForClass(auth);