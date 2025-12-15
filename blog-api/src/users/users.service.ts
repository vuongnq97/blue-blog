import { Injectable } from '@nestjs/common';

export interface UserRecord {
  id: number;
  email: string;
  password: string;
  name: string;
}

@Injectable()
export class UsersService {
  private readonly users: UserRecord[] = [
    {
      id: 1,
      email: 'jane.doe@example.com',
      password: 'supersecret',
      name: 'Jane Doe',
    },
  ];

  async findByEmail(email: string): Promise<UserRecord | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
