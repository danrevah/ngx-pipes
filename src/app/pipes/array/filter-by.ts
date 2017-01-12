import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {

  transform(arr: any, props: Array<string>, search: any, strict: boolean = false): any[] {
    if (!Array.isArray(arr) || (!GeneralHelper.isString(search) && !GeneralHelper.isNumber(search))) {
      return arr;
    }

    search = String(search).toLowerCase();

    return arr.filter((obj) => {
      return props.some((prop) => {
        const value: string = String(
          GeneralHelper.extractDeepPropertyByMapKey(obj, prop)
        ).toLowerCase();

        return strict
          ? search === value
          : !!~value.indexOf(search);
      });
    });
  }
}
