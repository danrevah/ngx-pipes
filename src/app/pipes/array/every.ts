import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'every'})
export class EveryPipe implements PipeTransform {

  transform(arr: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean|any[] {
    return Array.isArray(arr) ? arr.every(predicate) : arr;
  }
}
