import {PipeTransform, Pipe} from '@angular/core';
import {isObject, getKeysTwoObjects, isDeepEqual} from '../helpers/helpers';

@Pipe({name: 'diffObj'})
export class DiffObjPipe implements PipeTransform {

  transform(obj: any, original: any = {}): any {
    if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
      return {};
    }

    return getKeysTwoObjects(obj, original).reduce((diff: any, key: any) => {
      return (!isDeepEqual(original[key], obj[key]) ? diff[key] = obj[key] : {}), diff;
    }, {});
  }
}
