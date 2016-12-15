import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'isString'})
export class IsStringPipe implements PipeTransform {

  transform(value: any): boolean {
    return GeneralHelper.isString(value);
  }
}
