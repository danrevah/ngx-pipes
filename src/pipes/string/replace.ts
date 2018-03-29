import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
  transform<T>(text: T, searchValue: string | RegExp, replaceValue: string | ((substr: string, ...args: any[]) => string)): T;

  transform(text: string, searchValue: string | RegExp, replaceValue: string | ((substr: string, ...args: any[]) => string)): string {
    if (!isString(text)) {
      return text;
    }
    if (typeof replaceValue === 'string') {
      return text.replace(searchValue, replaceValue);
    } else if (typeof replaceValue === 'function') {
      return text.replace(searchValue, (x) => {
        return replaceValue(x);
      });
    } else {
      return text;
    }
  }
}
