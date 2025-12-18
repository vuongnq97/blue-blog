import { Injectable } from '@nestjs/common';

export interface AccountProfile {
  name: string;
  email: unknown;
}

@Injectable()
export class AccountService {
  getAccountProfile(id: string): AccountProfile {
    console.log(id);
    return {
      name: 'John Doe',
      email: '2SS@@',
    };
  }
}
