import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'sum'})
export class SumPipe implements PipeTransform {

  transform(arr: number[]): number|number[] {
    return !Array.isArray(arr)
      ? arr
      : arr.reduce((sum, curr) => sum + curr, 0);
  }
}
