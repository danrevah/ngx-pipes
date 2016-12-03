import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'union'})
export class UnionPipe implements PipeTransform {

  transform(arr: any, args: any[] = []): any[] {
    return (!Array.isArray(arr) || !Array.isArray(args))
      ? arr
      : args.reduce((newArr, currArr) => {
        return newArr.concat(currArr.reduce((noDupArr, curr) => {
            if (!~noDupArr.indexOf(curr) && !~newArr.indexOf(curr)) {
              noDupArr.push(curr);
            }
            return noDupArr;
          }, []));
      }, arr);
  }
}
