import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'union'})
export class UnionPipe implements PipeTransform {

  transform(arr: any, args: any[] = []): any[] {
    if (!Array.isArray(arr) || !Array.isArray(args)) {
      return arr;
    }

    return args.reduce((newArr, currArr) => {
        return newArr.concat(currArr.reduce((noDupArr, curr) => {
            return (!~noDupArr.indexOf(curr) && !~newArr.indexOf(curr))
              ? noDupArr.concat([curr])
              : noDupArr;
          }, []));
      }, arr);
  }
}
