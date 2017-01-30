import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {

  transform(value: any): any
  {
    if (isString(value)) {
      return value.split('').reverse().join('');
    }

    return Array.isArray(value)
      ? value.reverse()
      : value;
  }
}
