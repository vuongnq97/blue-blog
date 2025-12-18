import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: Types.ObjectId;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  avatar?: string;

  @Prop()
  coverImage?: string;

  @Prop({ default: 'default' })
  theme: string;

  @Prop({ default: false })
  isPublished: boolean;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
