import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'min'})
export class MinPipe implements PipeTransform {

  transform(arr: any): number|number[] {
    return Array.isArray(arr)
      ? Math.min(...arr)
      : arr;
  }
}
