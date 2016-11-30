import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'some'})
export class SomePipe implements PipeTransform {

  transform(arr: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean {
    return Array.isArray(arr) ? arr.some(predicate) : arr;
  }
}
