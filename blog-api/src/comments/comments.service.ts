import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schemas';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
  ) {}

  create(dto: CreateCommentDto) {
    return this.commentModel.create(dto);
  }

  findAll() {
    return this.commentModel.find().exec();
  }

  async findOne(id: string) {
    const doc = await this.commentModel.findById(id).exec();
    if (!doc) throw new NotFoundException('Comment not found');
    return doc;
  }

  async update(id: string, dto: UpdateCommentDto) {
    const doc = await this.commentModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!doc) throw new NotFoundException('Comment not found');
    return doc;
  }

  async remove(id: string) {
    const doc = await this.commentModel.findByIdAndDelete(id).exec();
    if (!doc) throw new NotFoundException('Comment not found');
    return doc;
  }
}
