import {PipeTransform, Pipe} from '@angular/core';
import {isFunction} from '../helpers/helpers';

@Pipe({name: 'isFunction'})
export class IsFunctionPipe implements PipeTransform {

  transform(value: any): boolean {
    return isFunction(value);
  }
}
