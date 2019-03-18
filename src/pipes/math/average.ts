import { Pipe, PipeTransform } from '@angular/core';
import { isNumberFinite } from '../helpers/helpers';

@Pipe({ name: 'average' })
export class AveragePipe implements PipeTransform {
  transform(arr: number[]): string | number {
    const isValid = arr.every(value => isNumberFinite(value));

    if (!isValid) {
      return NaN;
    }

    return arr.length ? arr.reduce((sum, value) => sum + value, 0) / arr.length : 0;
  }
}
