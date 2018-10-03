import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'average'})
export class AveragePipe implements PipeTransform {
  transform(num: any[]): number;
  transform<T>(num: any): T;

  transform(arr: any): any {
    let average = arr;

    if (Array.isArray(arr)) {
      const sum = arr.reduce((total: number, curr: number) => total + curr, 0);
      const count = arr.length;
      average = sum / count;
    }

    return average;
  }
}
