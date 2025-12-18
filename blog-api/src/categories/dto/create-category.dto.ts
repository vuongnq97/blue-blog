import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Blog id', example: '60d0fe4f5311236168a109ca' })
  @IsMongoId()
  @IsNotEmpty()
  blog: string;

  @ApiProperty({ example: 'Tech' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'tech' })
  @IsString()
  @IsNotEmpty()
  slug: string;
}
