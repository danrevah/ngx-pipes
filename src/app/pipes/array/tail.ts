import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'tail'})
export class TailPipe implements PipeTransform {

  transform(arr: any[], [num = 0]: number[] = []): any[]
  {
    return arr instanceof Array
        ? arr.slice(num)
        : arr;
  }
}
