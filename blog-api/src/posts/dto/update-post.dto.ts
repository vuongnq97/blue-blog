import { IsArray, IsDateString, IsIn, IsInt, IsMongoId, IsOptional, IsString, Min } from 'class-validator';

export class UpdatePostDto {
  @IsMongoId()
  @IsOptional()
  blog?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  excerpt?: string;

  @IsMongoId()
  @IsOptional()
  category?: string;

  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  tags?: string[];

  @IsIn(['draft', 'published'])
  @IsOptional()
  status?: 'draft' | 'published';

  @IsDateString()
  @IsOptional()
  publishedAt?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  viewCount?: number;
}
