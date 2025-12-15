import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class RequiredValuePipe implements PipeTransform {
    private readonly message?;
    constructor(message?: string | undefined);
    transform(value: unknown, metadata: ArgumentMetadata): {};
}
