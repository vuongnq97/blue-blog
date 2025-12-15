import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class LoginLoggerMiddleware implements NestMiddleware {
    private readonly logger;
    use(req: Request, _res: Response, next: NextFunction): void;
}
