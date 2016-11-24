import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {

  transform(value:string):string;
  transform(value:any[]):any[];
  transform(value: string | any[]): any
  {
    if (typeof value === 'string') {
      return value.split('').reverse().join('');
    }
    if (value instanceof Array) {
      return value.reverse();
    }
    return value;
  }
}
