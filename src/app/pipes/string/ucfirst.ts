import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'ucfirst'})
export class UcFirstPipe implements PipeTransform {

  transform(text: any):string {
    return isString(text)
      ? (text.slice(0, 1).toUpperCase() + text.slice(1))
      : text;
  }
}
