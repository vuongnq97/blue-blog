import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoginLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoginLoggerMiddleware.name);

  use(req: Request, _res: Response, next: NextFunction) {
    this.logger.log(`Login attempt for ${req.body?.email ?? 'unknown email'}`);
    next();
  }
}
