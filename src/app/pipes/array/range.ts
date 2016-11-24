import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {

  transform(max:number, [step = 1]:any[] = []):any[] {
    let arr = [];
    for (let i=0;i<max;i+=step) {
      arr.push(i);
    }
    return arr;
  }
}
