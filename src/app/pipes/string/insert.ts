import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';
import { isNumber } from '../helpers/helpers';

@Pipe({
  name: 'insert'
})
export class InsertPipe implements PipeTransform {

  transform(text: any, chars: string = '', stepSize: number = 1): any {
    function chunk(): string[] {

      if (!isNumber(stepSize) || stepSize <= 0) {
        return text.split('');
      }

      let transformedArr = [];
      for (let i = 0; i < text.length; i += stepSize) {
        transformedArr.push(text.substr(i, stepSize))
      }
      return transformedArr;
    }

    return isString(text)
      ? chunk()
        .join(chars)
      : text;

  }

}
