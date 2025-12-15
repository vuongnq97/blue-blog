import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RequiredValuePipe implements PipeTransform {
  constructor(private readonly message?: string) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    if (value === undefined || value === null || (typeof value === 'string' && value.trim() === '')) {
      const target = metadata.data ? `"${metadata.data}"` : 'value';
      const defaultMessage = `${capitalize(metadata.type)} parameter ${target} is required`;
      throw new BadRequestException(this.message ?? defaultMessage);
    }
    return value;
  }
}

const capitalize = (input: string): string => {
  if (!input) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
};
