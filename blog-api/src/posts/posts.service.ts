import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './schemas/post.schemas';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  create(dto: CreatePostDto) {
    const { blog, category, tags, publishedAt, ...rest } = dto;
    return this.postModel.create({
      ...rest,
      blog: new Types.ObjectId(blog),
      category: category ? new Types.ObjectId(category) : undefined,
      tags: Array.isArray(tags) ? tags.map((id) => new Types.ObjectId(id)) : undefined,
      publishedAt: publishedAt ? new Date(publishedAt) : undefined,
    });
  }

  findAll() {
    return this.postModel.find().exec();
  }

  async findOne(id: string) {
    const doc = await this.postModel.findById(id).exec();
    if (!doc) throw new NotFoundException('Post not found');
    return doc;
  }

  async update(id: string, dto: UpdatePostDto) {
    const { blog, category, tags, publishedAt, ...rest } = dto;
    const update: Partial<Post> = { ...rest };
    if (blog) update.blog = new Types.ObjectId(blog);
    if (category) update.category = new Types.ObjectId(category);
    if (tags) update.tags = tags.map((tagId) => new Types.ObjectId(tagId));
    if (publishedAt) update.publishedAt = new Date(publishedAt);

    const doc = await this.postModel.findByIdAndUpdate(id, update, { new: true }).exec();
    if (!doc) throw new NotFoundException('Post not found');
    return doc;
  }

  async remove(id: string) {
    const doc = await this.postModel.findByIdAndDelete(id).exec();
    if (!doc) throw new NotFoundException('Post not found');
    return doc;
  }
}
