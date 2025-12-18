import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './schemas/tag.schemas';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>,
  ) {}

  create(dto: CreateTagDto) {
    return this.tagModel.create(dto);
  }

  findAll() {
    return this.tagModel.find().exec();
  }

  async findOne(id: string) {
    const doc = await this.tagModel.findById(id).exec();
    if (!doc) throw new NotFoundException('Tag not found');
    return doc;
  }

  async update(id: string, dto: UpdateTagDto) {
    const doc = await this.tagModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!doc) throw new NotFoundException('Tag not found');
    return doc;
  }

  async remove(id: string) {
    const doc = await this.tagModel.findByIdAndDelete(id).exec();
    if (!doc) throw new NotFoundException('Tag not found');
    return doc;
  }
}
