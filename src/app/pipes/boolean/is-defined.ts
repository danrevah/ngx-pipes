import {PipeTransform, Pipe} from '@angular/core';
import {isUndefined} from '../helpers/helpers';

@Pipe({name: 'isDefined'})
export class IsDefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return !isUndefined(value);
  }
}
