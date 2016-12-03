import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'initial'})
export class InitialPipe implements PipeTransform {

  transform(arr: any, num: number = 0): any[] {
    return Array.isArray(arr)
        ? arr.slice(0, arr.length - num)
        : arr;
  }
}
