import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'invert'})
export class InvertPipe implements PipeTransform {

  transform(obj: any): Object {
    if (Array.isArray(obj) || !GeneralHelper.isObject(obj)) {
      return obj;
    }

    return Object.keys(obj)
      .reduce((o, k) => Object.assign(o, {[obj[k]]: k}), {});
  }
}
