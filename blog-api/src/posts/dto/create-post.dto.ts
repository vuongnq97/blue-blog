import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsIn, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Blog id', example: '60d0fe4f5311236168a109ca' })
  @IsMongoId()
  @IsNotEmpty()
  blog: string;

  @ApiProperty({ example: 'Hello world' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'hello-world' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Markdown or HTML content' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  excerpt?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  category?: string;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  tags?: string[];

  @ApiProperty({ enum: ['draft', 'published'], default: 'draft' })
  @IsOptional()
  @IsIn(['draft', 'published'])
  status?: 'draft' | 'published';

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @ApiProperty({ required: false, example: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  viewCount?: number;
}
