import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ClientIdGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
