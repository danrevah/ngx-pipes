import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'isNumber'})
export class IsNumberPipe implements PipeTransform {

  transform(value: any): boolean {
    return GeneralHelper.isNumber(value);
  }
}
