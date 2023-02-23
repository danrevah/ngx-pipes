import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'take' })
export class TakePipe implements PipeTransform {
  transform(input: any, from: 'start' | 'end' = 'start', count: number = 1): any {
    const isInputString = isString(input);
    if (isInputString) {
      input = input.split('');
    }

    let transformedArray = [];
    const isArray = Array.isArray(input);

    if (isArray) {
      count = Math.min(input.length, Math.abs(count));
      if (count === 0) {
        transformedArray = [];
      } else {
        transformedArray = from === 'start' ? input.slice(0, Math.abs(count)) : input.slice(count * -1);
      }
    } else {
      transformedArray = input;
    }

    return isInputString ? transformedArray.join('') : transformedArray;
  }
}
