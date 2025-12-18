import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ClientIdGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request & { headers: Record<string, string | undefined> }>();
    console.log(request.headers);
    // const clientId = request.headers['x-client-id'];
    //
    // if (!clientId) {
    //   throw new UnauthorizedException('Missing client identifier');
    // }
    return true;
  }
}
