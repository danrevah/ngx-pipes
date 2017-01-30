import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'match'})
export class MatchPipe implements PipeTransform {

  transform(text: any, pattern: string, flags?: string): boolean {
    if (!isString(text)) {
      return text;
    }

    return text.match(new RegExp(pattern, flags));
  }
}
