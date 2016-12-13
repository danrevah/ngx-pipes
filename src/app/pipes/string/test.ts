import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'test'})
export class TestPipe implements PipeTransform {

  transform(text: any, pattern: string, flags?: string): boolean {
    if (!GeneralHelper.isString(text)) {
      return text;
    }

    return (new RegExp(pattern, flags)).test(text);
  }
}
