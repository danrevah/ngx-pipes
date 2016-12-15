import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'isObject'})
export class IsObjectPipe implements PipeTransform {

  transform(value: any): boolean {
    return GeneralHelper.isObject(value);
  }
}
