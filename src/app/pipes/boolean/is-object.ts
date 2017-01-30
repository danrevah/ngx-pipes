import {PipeTransform, Pipe} from '@angular/core';
import {isObject} from '../helpers/helpers';

@Pipe({name: 'isObject'})
export class IsObjectPipe implements PipeTransform {

  transform(value: any): boolean {
    return isObject(value);
  }
}
