import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'pairs'})
export class PairsPipe implements PipeTransform {

  transform(obj: any): any[] {
    if (Array.isArray(obj) || !GeneralHelper.isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).map(k => [k, obj[k]]);
  }
}
