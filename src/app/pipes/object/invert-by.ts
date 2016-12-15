import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'invertBy'})
export class InvertByPipe implements PipeTransform {

  transform(obj: any, cb: Function = null): Object {
    if (Array.isArray(obj) || !GeneralHelper.isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).reduce((o, k) => {
      const key = cb ? cb(obj[k]) : obj[k];
      return Array.isArray(o[key])
        ? (o[key].push(k), o)
        : Object.assign(o, {[key]: [k]});
      }, {});
  }
}
