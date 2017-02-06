import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'underscore'})
export class UnderscorePipe implements PipeTransform {

  transform(text: any, chars: string = '\\s'): string {
    return isString(text)
      ? text.trim()
        .replace(/\s+/g, '')
        .replace(/[A-Z]/g, (c: string, k: any) => {
          return k ? `_${c.toLowerCase()}` : c.toLowerCase()
        })
      : text;
  }
}
