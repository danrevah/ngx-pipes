import { Pipe, PipeTransform } from '@angular/core';
import {extractDeepPropertyByMapKey, isFunction} from '../helpers/helpers';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {

  transform(arr: any, discriminator: any = []): any {
    if (!Array.isArray(arr)) {
      return arr;
    }

    return this.groupBy(arr, discriminator);
  }

  private groupBy(list: any[], discriminator: any) {
    return list.reduce((acc, payload) => {
      let key;
      if (isFunction(discriminator)) {
        key = (<Function>discriminator)(payload);
      } else if (Array.isArray(discriminator)) {
        key = discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join('_');
      } else {
        key = extractDeepPropertyByMapKey(payload, <string>discriminator);
      }

      return acc[key] = Array.isArray(acc[key])
        ? acc[key].concat([payload])
        : [payload], acc;
    }, {});
  }
}
