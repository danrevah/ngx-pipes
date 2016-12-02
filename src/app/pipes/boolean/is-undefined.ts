import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'isUndefined'})
export class IsUndefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return GeneralHelper.isUndefined(value);
  }
}
