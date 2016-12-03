import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'diff'})
export class DiffPipe implements PipeTransform {

  transform(arr: any, ...args: any[]): any[] {
    return !Array.isArray(arr) ? arr : args.reduce((diffArr, currArr) => {
      return diffArr.filter(elm => !~currArr.indexOf(elm))
    }, arr);
  }
}
