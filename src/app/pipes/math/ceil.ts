import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'ceil'})
export class CeilPipe implements PipeTransform {

  transform(num: number, precision: number = 0):number {
    if (precision <= 0) {
      return Math.ceil(num);
    }

    const tho = 10 ** precision;
    return Math.ceil(num * tho) / tho;
  }
}
