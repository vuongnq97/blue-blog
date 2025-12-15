export interface UserRecord {
    id: number;
    email: string;
    password: string;
    name: string;
}
export declare class UsersService {
    private readonly users;
    findByEmail(email: string): Promise<UserRecord | undefined>;
}
