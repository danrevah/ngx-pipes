import { Pipe, PipeTransform } from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({
  name: 'insert'
})
export class InsertPipe implements PipeTransform {

  transform(text: any, chars: string = ''): any {

    return isString(text)
      ? text.trim()
        .split('')
        .join(chars)
      : text;

  }

}
