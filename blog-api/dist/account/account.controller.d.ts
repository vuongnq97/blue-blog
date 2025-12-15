import { AccountService } from './account.service';
import type { AccountProfile } from './account.service';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getInfo(id: string): AccountProfile;
}
