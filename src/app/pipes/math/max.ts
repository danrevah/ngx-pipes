import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'max'})
export class MaxPipe implements PipeTransform {

  transform(arr: number[]):number|number[] {
    return Array.isArray(arr)
      ? Math.max(...arr)
      : arr;
  }
}
