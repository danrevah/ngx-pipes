import { PipeTransform, Pipe } from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({ name: 'lpad' })
export class LeftPadPipe implements PipeTransform {
  
  transform(str: string, length: number, padCharacter: string = ' '): string {
    if (!GeneralHelper.isString(str) || str.length >= length) {
      return str;
    }
    while (str.length < length) {
      str = padCharacter + str;
    }
    return str;
  }
}
