import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { ClientIdGuard } from './guards/client-id.guard';
import { ResponseEnvelopeInterceptor } from './interceptors/response-envelope.interceptor';
import { AuthExceptionFilter } from './filters/auth-exception.filter';
import { LoginLoggerMiddleware } from './middleware/login-logger.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  imports: [UsersModule, JwtModule.register({ secret: 'topsecret', signOptions: { expiresIn: '1h' } })],
  controllers: [AuthController],
  providers: [
    AuthService,
    ClientIdGuard,
    JwtAuthGuard,
    ResponseEnvelopeInterceptor,
    AuthExceptionFilter,
    {
      provide: APP_GUARD,
      useExisting: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useExisting: ResponseEnvelopeInterceptor,
    },
    {
      provide: APP_FILTER,
      useExisting: AuthExceptionFilter,
    },
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginLoggerMiddleware).forRoutes('auth/login');
  }
}
