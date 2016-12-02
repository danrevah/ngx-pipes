import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'radians'})
export class RadiansPipe implements PipeTransform {

  transform(degrees: number): number {
    if (!GeneralHelper.isNumberFinite(degrees)) {
      return NaN;
    }

    return degrees * Math.PI / 180;
  }
}
