import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {

  transform(obj: any): any[] {
    if (Array.isArray(obj) || !GeneralHelper.isObject(obj)) {
      return obj;
    }

    return Object.keys(obj);
  }
}
