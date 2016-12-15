import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'isDefined'})
export class IsDefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return !GeneralHelper.isUndefined(value);
  }
}
