import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'rtrim'})
export class RightTrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return GeneralHelper.isString(text)
      ? text.replace(new RegExp(`[${chars}]+$`), '')
      : text;
  }
}
