import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../users/users.service").UserRecord>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        tokenType: string;
    }>;
}
