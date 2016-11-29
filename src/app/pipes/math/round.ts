import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {

  transform(num: number, precision: number = 0): number {
    if (precision <= 0) {
      return Math.round(num);
    }

    const tho = 10 ** precision;
    return Math.round(num * tho) / tho;
  }
}
