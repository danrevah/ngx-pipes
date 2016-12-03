import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'ucfirst'})
export class UcFirstPipe implements PipeTransform {

  transform(text: string):string {
    return GeneralHelper.isString(text)
      ? (text.slice(0, 1).toUpperCase() + text.slice(1))
      : text;
  }
}
