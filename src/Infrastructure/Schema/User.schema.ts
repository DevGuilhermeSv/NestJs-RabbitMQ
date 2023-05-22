import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  id: number;
  @Prop()
  cpf: string;
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
