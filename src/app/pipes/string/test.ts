import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'test'})
export class TestPipe implements PipeTransform {

  transform(text: any, pattern: string, flags?: string): boolean {
    if (!isString(text)) {
      return text;
    }

    return (new RegExp(pattern, flags)).test(text);
  }
}
