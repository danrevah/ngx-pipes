import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return GeneralHelper.isString(text) ? text.replace(new RegExp(
      `^[${chars}]+|[${chars}]+$`, 'g'
    ), '') : text;
  }
}
