import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthExceptionFilter } from './filters/auth-exception.filter';
import { ResponseEnvelopeInterceptor } from './interceptors/response-envelope.interceptor';
import { Public } from './decorators/public.decorator';

@Controller('auth')
@UseFilters(new AuthExceptionFilter())
@UseInterceptors(ResponseEnvelopeInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
