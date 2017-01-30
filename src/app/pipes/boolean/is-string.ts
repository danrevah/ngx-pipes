import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers/helpers';

@Pipe({name: 'isString'})
export class IsStringPipe implements PipeTransform {

  transform(value: any): boolean {
    return isString(value);
  }
}
