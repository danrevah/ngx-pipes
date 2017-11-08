import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey, isBoolean, isNumberFinite, isString, isUndefined } from '../helpers/helpers';

// tslint:disable no-bitwise
@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {

  transform(input: any[], props: Array<string>, search?: any, strict?: boolean): any[];
  transform<T>(input: T, props: Array<string>, search?: any, strict?: boolean): T;

  transform(input: any, props: Array<string>, search: any = '', strict: boolean = false): any {
    if (!Array.isArray(input) || (!isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
      return input;
    }

    const term = String(search).toLowerCase();

    return input.filter((obj) => {
      return props.some((prop) => {
        const value = extractDeepPropertyByMapKey(obj, prop);
        const strValue: string = String(value).toLowerCase();

        if (isUndefined(value)) {
          return false;
        }

        return strict
          ? term === strValue
          : !!~strValue.indexOf(term);
      });
    });
  }
}
