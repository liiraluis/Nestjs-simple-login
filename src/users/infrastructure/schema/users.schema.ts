import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true, collection: 'users'})
export class user{
    @Prop({required: true})
    username: String

    @Prop({required: true})
    email: String

    @Prop({required: true})
    password: String
}

export const userSchema = SchemaFactory.createForClass(user);