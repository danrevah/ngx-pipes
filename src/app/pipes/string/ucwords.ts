import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'ucwords'})
export class UcWordsPipe implements PipeTransform {

  transform(text: string): string {
    return isString(text)
      ? text.split(' ')
            .map(sub => sub.slice(0, 1).toUpperCase() + sub.slice(1))
            .join(' ')
      : text;
  }
}
