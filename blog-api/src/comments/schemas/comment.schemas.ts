import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  post: Types.ObjectId;

  @Prop({ required: true })
  authorName: string;

  @Prop()
  authorEmail?: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: false })
  isApproved: boolean;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
