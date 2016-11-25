import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'pow'})
export class PowerPipe implements PipeTransform {

  transform(num: number, power: number = 2): number {
    return isNaN(num) ? num : num ** power;
  }
}
