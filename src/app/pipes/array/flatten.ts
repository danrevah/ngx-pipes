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
    return array.reduce((arr: any[], elm: any) => elm instanceof Array ?
      arr.concat(this.flatten(elm)) : arr.concat(elm), []);
  }
}
