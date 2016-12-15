import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'isFunction'})
export class IsFunctionPipe implements PipeTransform {

  transform(value: any): boolean {
    return GeneralHelper.isFunction(value);
  }
}
