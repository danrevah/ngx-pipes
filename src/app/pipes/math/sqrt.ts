import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'sqrt'})
export class SqrtPipe implements PipeTransform {

  transform(num: number): number {
    return isNaN(num) ? num : Math.sqrt(num);
  }
}
