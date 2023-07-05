import {Pipe, PipeTransform} from '@angular/core';
import {isString} from "../helpers/helpers";

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(value: string, length: number = 15, replace: string = '...'): string {
    if (isString(value)) {
      if (value.length < length) {
        return value;
      }
      return value.substring(0, length) + replace;
    }
    return value;
  }

}
