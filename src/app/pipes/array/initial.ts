import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'initial'})
export class InitialPipe implements PipeTransform {

  transform(arr: any[], num: number = 0): any[]
  {
    return arr instanceof Array
        ? arr.slice(0, arr.length - num)
        : arr;
  }
}
