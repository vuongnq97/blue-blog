export interface AccountProfile {
    name: string;
    email: unknown;
}
export declare class AccountService {
    getAccountProfile(id: string): AccountProfile;
}
