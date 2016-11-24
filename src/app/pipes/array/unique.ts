import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'unique'})
export class UniquePipe implements PipeTransform {

  transform(arr:any[]):any[] {
    return arr.filter((elm, index) => arr.indexOf(elm) === index);
  }
}
