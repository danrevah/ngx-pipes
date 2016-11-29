import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'diff'})
export class DiffPipe implements PipeTransform {

  transform(arr: any[], ...args: any[]): any[] {
    return args.reduce((diffArr, currArr) => {
      return diffArr.filter(elm => !~currArr.indexOf(elm))
    }, arr);
  }
}
