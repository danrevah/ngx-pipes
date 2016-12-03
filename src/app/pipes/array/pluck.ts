import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers';

@Pipe({name: 'pluck'})
export class PluckPipe implements PipeTransform {

  transform(arr: any, map: string): any[] {
    return Array.isArray(arr)
      ? arr.map(e => GeneralHelper.extractDeepPropertyByMapKey(e, map))
      : arr;
  }
}
