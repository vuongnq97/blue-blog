import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  validateUser(email: string, password: string) {
    console.log(`Validating user with email: ${email} and password: ${password}`);
    // const user = this.usersService.findByEmail(email);
    // if (!user || user.password !== password) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }
    return { id: '1', email, name: 'John Doe' }; // Mocked user
  }

  async login(email: string, password: string) {
    const user = this.validateUser(email, password);

    const payload = { sub: user.id, email: user.email, name: user.name };
    const token = await this.jwtService.signAsync(payload);

    return {
      accessToken: token,
      tokenType: 'Bearer',
    };
  }
}
