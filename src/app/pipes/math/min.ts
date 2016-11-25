import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'min'})
export class MinPipe implements PipeTransform {

  transform(arr: number[]):number|number[] {
    return Array.isArray(arr)
      ? Math.min(...arr)
      : arr;
  }
}
