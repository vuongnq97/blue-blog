import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ description: 'Blog id', example: '60d0fe4f5311236168a109ca' })
  @IsMongoId()
  @IsNotEmpty()
  blog: string;

  @ApiProperty({ example: 'JavaScript' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'javascript' })
  @IsString()
  @IsNotEmpty()
  slug: string;
}
