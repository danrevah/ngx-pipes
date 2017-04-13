import {PipeTransform, Pipe} from '@angular/core';
import {extractDeepPropertyByMapKey} from '../helpers/helpers';

@Pipe({name: 'pluck', pure: false})
export class PluckPipe implements PipeTransform {

  transform(input: any, map: string): any[] {
    return Array.isArray(input)
      ? input.map(e => extractDeepPropertyByMapKey(e, map))
      : input;
  }
}
