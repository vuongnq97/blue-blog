import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({ description: 'Owner user id', example: '60d0fe4f5311236168a109ca' })
  @IsMongoId()
  @IsNotEmpty()
  owner: string;

  @ApiProperty({ example: 'my-blog' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'My Blog' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  coverImage?: string;

  @ApiProperty({ required: false, example: 'default' })
  @IsOptional()
  @IsString()
  theme?: string;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}
