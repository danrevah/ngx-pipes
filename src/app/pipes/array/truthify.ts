import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'truthify'})
export class TrurthifyPipe implements PipeTransform {

  transform(arr: any): any[] {
    return Array.isArray(arr)
      ? arr.filter(elm => !!elm)
      : arr;
  }
}
