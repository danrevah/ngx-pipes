import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'sum'})
export class SumPipe implements PipeTransform {

  transform(arr: any): number|number[] {
    return Array.isArray(arr)
      ? arr.reduce((sum, curr) => sum + curr, 0)
      : arr;
  }
}
