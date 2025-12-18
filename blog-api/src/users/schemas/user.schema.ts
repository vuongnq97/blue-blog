import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 8,
    select: false,
  })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  avatar?: string;

  @Prop({
    enum: ['user', 'admin'],
    default: 'user',
  })
  role: 'user' | 'admin';

  @Prop({ default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
