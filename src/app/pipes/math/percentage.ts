import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'percentage'})
export class PercentagePipe implements PipeTransform {

  transform(num: any, total: number = 100, floor: boolean = false): number {
    if (isNaN(num)) {
      return num;
    }

    const percent = num * 100 / total;
    return floor ? Math.floor(percent) : percent;
  }
}
