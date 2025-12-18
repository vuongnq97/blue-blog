import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TagDocument = HydratedDocument<Tag>;

@Schema({ timestamps: true })
export class Tag {
  @Prop({ type: Types.ObjectId, ref: 'Blog', required: true })
  blog: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);

TagSchema.index({ blog: 1, slug: 1 }, { unique: true });
