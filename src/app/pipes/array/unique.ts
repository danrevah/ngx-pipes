import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'unique'})
export class UniquePipe implements PipeTransform {

  transform(arr: any): any[] {
    return Array.isArray(arr)
      ? arr.filter((elm, index) => arr.indexOf(elm) === index)
      : arr;
  }
}
