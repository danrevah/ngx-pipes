import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'intersection'})
export class IntersectionPipe implements PipeTransform {

  transform(arr: any, ...args: any[]): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    return args.reduce((newArr, currArr) => {
      return newArr.filter(elm => !!~currArr.indexOf(elm));
    }, arr);
  }
}
