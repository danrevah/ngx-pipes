import {PipeTransform, Pipe} from '@angular/core';
import {isString, extractDeepPropertyByMapKey, isNumberFinite, isBoolean} from '../helpers/helpers';

@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {

  transform(input: any, props: Array<string>, search: any, strict: boolean = false): any[] {
    if (!Array.isArray(input) || (!isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
      return input;
    }

    const term = String(search).toLowerCase();

    return input.filter((obj) => {
      return props.some((prop) => {
        const value: string = String(
          extractDeepPropertyByMapKey(obj, prop)
        ).toLowerCase();

        return strict
          ? term === value
          : !!~value.indexOf(term);
      });
    });
  }
}
