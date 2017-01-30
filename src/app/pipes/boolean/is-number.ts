import {PipeTransform, Pipe} from '@angular/core';
import {isNumber} from '../helpers/helpers';

@Pipe({name: 'isNumber'})
export class IsNumberPipe implements PipeTransform {

  transform(value: any): boolean {
    return isNumber(value);
  }
}
