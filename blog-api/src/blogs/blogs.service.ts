import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schemas/blog.schemas';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<Blog>,
  ) {}

  create(dto: CreateBlogDto) {
    return this.blogModel.create(dto);
  }

  findAll() {
    return this.blogModel.find().exec();
  }

  async findOne(id: string) {
    const doc = await this.blogModel.findById(id).exec();
    if (!doc) throw new NotFoundException('Blog not found');
    return doc;
  }

  async update(id: string, dto: UpdateBlogDto) {
    const doc = await this.blogModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!doc) throw new NotFoundException('Blog not found');
    return doc;
  }

  async remove(id: string) {
    const doc = await this.blogModel.findByIdAndDelete(id).exec();
    if (!doc) throw new NotFoundException('Blog not found');
    return doc;
  }
}
