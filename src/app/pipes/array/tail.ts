import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'tail'})
export class TailPipe implements PipeTransform {

  transform(arr: any, num: number = 0): any[] {
    return Array.isArray(arr) ? arr.slice(num) : arr;
  }
}
