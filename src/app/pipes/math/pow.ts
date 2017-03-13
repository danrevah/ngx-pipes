import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'pow'})
export class PowerPipe implements PipeTransform {

  transform(num: any, power: number = 2): number {
    return !isNaN(num)
      ? num ** power
      : num ;
  }
}
