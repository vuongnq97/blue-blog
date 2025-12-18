import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ description: 'Post id', example: '60d0fe4f5311236168a109ca' })
  @IsMongoId()
  @IsNotEmpty()
  post: string;

  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  @IsNotEmpty()
  authorName: string;

  @ApiProperty({ required: false, example: 'jane@example.com' })
  @IsOptional()
  @IsString()
  authorEmail?: string;

  @ApiProperty({ example: 'Nice post!' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isApproved?: boolean;
}
