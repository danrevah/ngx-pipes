import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'intersection'})
export class IntersectionPipe implements PipeTransform {

  transform(arr: any[], ...args: any[]): any[] {
    return args.reduce((newArr, currArr) =>
        newArr.filter(elm => !!~currArr.indexOf(elm))
      , arr);
  }
}
