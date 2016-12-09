import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {

  transform(obj: any): any[] {
    if (Array.isArray(obj) || !GeneralHelper.isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).map(k => obj[k]);
  }
}
