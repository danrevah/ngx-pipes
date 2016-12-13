import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'match'})
export class MatchPipe implements PipeTransform {

  transform(text: any, pattern: string, flags?: string): boolean {
    if (!GeneralHelper.isString(text)) {
      return text;
    }

    return text.match(new RegExp(pattern, flags));
  }
}
