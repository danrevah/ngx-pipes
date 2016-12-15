import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'flatten'})
export class FlattenPipe implements PipeTransform {

  transform(arr: any, shallow: boolean = false): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    return shallow
      ? [].concat.apply([], arr)
      : this.flatten(arr);
  }

  private flatten(array: any[]): any[] {
    return array.reduce((arr: any[], elm: any) =>
      Array.isArray(elm)
        ? arr.concat(this.flatten(elm))
        : arr.concat(elm)
      , []);
  }
}
