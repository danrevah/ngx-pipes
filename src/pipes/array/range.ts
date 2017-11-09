import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
  transform(start: number = 1, count: number = 0, step: number = 1): any {
    let next;
    return Array(count).fill(null).map(function (v, i) {
      next = start;
      start += step;
      return next;
    });
  }
}
