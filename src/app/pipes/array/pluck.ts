import {PipeTransform, Pipe} from '@angular/core';
import {extractDeepPropertyByMapKey} from '../helpers/helpers';

@Pipe({name: 'pluck'})
export class PluckPipe implements PipeTransform {

  transform(arr: any, map: string): any[] {
    return Array.isArray(arr)
      ? arr.map(e => extractDeepPropertyByMapKey(e, map))
      : arr;
  }
}
