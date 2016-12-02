import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {

  transform(value: any): any
  {
    if (typeof value === 'string') {
      return value.split('').reverse().join('');
    }
    if (Array.isArray(value)) {
      return value.reverse();
    }
    return value;
  }
}
