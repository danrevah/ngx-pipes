import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'underscore'})
export class UnderscorePipe implements PipeTransform {

  transform(text: any, chars: string = '\\s'): string {
    return GeneralHelper.isString(text)
      ? text.replace(/[A-Z]/g, (c, k) => k ? `_${c.toLowerCase()}` : c.toLowerCase())
      : text;
  }
}
