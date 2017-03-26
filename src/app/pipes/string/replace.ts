import { PipeTransform, Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {

  transform(text: any, pattern: string, newSubstr: string, flags?: string): boolean {
    if (!isString(text)) {
      return text;
    }
    return text.replace(new RegExp(pattern, flags), newSubstr);
  }
}
