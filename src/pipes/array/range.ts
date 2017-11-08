import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
  transform(input: any, start: number = 1, count: number = 0, step: number = 1): any {

    if (!Array.isArray(input)) {
      return input;
    }

    // return input.concat(Array(count).fill('').map((x, i) => (i + start)));

    let range: number[] = [];

    for (let length = 0; length < count; ++length) {
      range.push(start);
      start += step;
    }

    return range;
  }
}
