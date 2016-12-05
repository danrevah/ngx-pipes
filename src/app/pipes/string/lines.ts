import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'lines'})
export class LinesPipe implements PipeTransform {

  transform(text: any, chars: string = '\\s'): Array<string> | any {
    return GeneralHelper.isString(text)
      ? text.replace(/\r\n/g, '\n').split('\n')
      : text;
  }
}
