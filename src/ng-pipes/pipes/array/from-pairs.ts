import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromPairs',
  standalone: true,
})
export class FromPairsPipe implements PipeTransform {
  transform(input: any): any {
    if (!Array.isArray(input)) {
      return input;
    }

    return input.reduce((obj, arr) => {
      if (!Array.isArray(arr)) {
        return obj;
      }

      const [prop, val] = arr;

      obj[prop] = val;

      return obj;
    }, {});
  }
}
