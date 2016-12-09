import { Pipe, PipeTransform } from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {

  transform(arr: any, ...args: any[]): any {
    if (!Array.isArray(arr)) {
      return arr;
    }

    return this.groupBy(arr, args[0]);
  }

  private groupBy(list: any[], discriminator: Function | string) {
    return list.reduce((acc, payload) => {
      const key = GeneralHelper.isFunction(discriminator)
        ? (<Function>discriminator)(payload)
        : payload[<string>discriminator];

      return acc[key] = Array.isArray(acc[key])
        ? acc[key].concat([payload])
        : [payload], acc;
    }, {});
  }
}
