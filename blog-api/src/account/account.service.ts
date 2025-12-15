import { Injectable } from '@nestjs/common';

export interface AccountProfile {
  name: string;
  email: unknown;
}

@Injectable()
export class AccountService {
  getAccountProfile(id: string): AccountProfile {
    return {
      name: 'John Doe',
    email: '2SS@@'};
  }
}
