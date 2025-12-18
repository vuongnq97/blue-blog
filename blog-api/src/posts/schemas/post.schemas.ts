import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ type: Types.ObjectId, ref: 'Blog', required: true })
  blog: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  content: string; // markdown / html

  @Prop()
  excerpt?: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category?: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'Tag', default: [] })
  tags: Types.ObjectId[];

  @Prop({
    enum: ['draft', 'published'],
    default: 'draft',
  })
  status: 'draft' | 'published';

  @Prop()
  publishedAt?: Date;

  @Prop({ default: 0 })
  viewCount: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);

// mỗi blog không được trùng slug bài viết
PostSchema.index({ blog: 1, slug: 1 }, { unique: true });
