import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
  transform(input: any, size: number = 1): any {
    if (isString(input)) {
      return this.chunk(input
        .split(''), size);
    }

    return Array.isArray(input) ? this.chunk(input, size) : input;
  }

  private chunk(input: any[], size: number) {
    return Array(Math.ceil(input.length / size))
      .fill([])
      .map((_, index) => index * size)
      .map(begin => input.slice(begin, begin + size));
  }
}
