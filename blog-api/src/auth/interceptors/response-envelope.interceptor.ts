import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ResponseEnvelope<T> {
  success: boolean;
  data: T;
}

@Injectable()
export class ResponseEnvelopeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        const response: ResponseEnvelope<typeof data> = {
          success: true,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data,
        };
        return response;
      }),
    );
  }
}
