import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'degrees'})
export class DegreesPipe implements PipeTransform {

  transform(radians: number): number {
    if (!GeneralHelper.isNumberFinite(radians)) {
      return NaN;
    }

    return radians * 180 / Math.PI;
  }
}
