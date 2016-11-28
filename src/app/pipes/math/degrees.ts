import {PipeTransform, Pipe, Injectable} from '@angular/core';
import {isNumberFinite} from '../helpers';

@Injectable()
@Pipe({name: 'degrees'})
export class DegreesPipe implements PipeTransform {

  transform(radians: number): number {
    if (!isNumberFinite(radians)) {
      return NaN;
    }

    return radians * 180 / Math.PI;
  }
}
