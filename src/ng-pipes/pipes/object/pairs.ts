import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';

@Pipe({
  name: 'pairs',
  standalone: true,
})
export class PairsPipe implements PipeTransform {
  transform(obj: any): any[] {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.entries(obj);
  }
}
