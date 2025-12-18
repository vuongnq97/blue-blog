import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class UserDTO {
  @ApiProperty({ example: 'jane.doe@example.com' })
  readonly email: string;

  @ApiProperty({ example: 'John Doe' })
  readonly name: string;

  @ApiProperty({ example: 'supersecret' })
  @MinLength(6)
  readonly password: string;
}
