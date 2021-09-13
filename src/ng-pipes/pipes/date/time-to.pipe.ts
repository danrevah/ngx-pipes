import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTo',
})
export class TimeToPipe implements PipeTransform {
  private static YEAR_MS: number = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
  private static MAPPER: any = [
    { single: 'next year', many: 'years', div: 1 },
    { single: 'next month', many: 'months', div: 12 },
    { single: 'next week', many: 'weeks', div: 4 },
    { single: 'tomorrow', many: 'days', div: 7 },
    { single: 'in an hour', many: 'hours', div: 24 },
    { single: 'just now', many: 'minutes', div: 60 },
  ];

  transform(inputDate: any): string {
    if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
      return 'Invalid date';
    }

    const future = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
    const now = +new Date();
    console.log(new Date(future));
    console.log(new Date(now));

    if (future < now) {
      return 'in the past';
    }

    for (let i = 0, l = TimeToPipe.MAPPER.length, ms = future - now, div = TimeToPipe.YEAR_MS; i < l; i++) {
      const elm = TimeToPipe.MAPPER[i];

      const unit = Math.round(ms / (div /= elm.div));
      if (unit >= 1) {
        return unit === 1 ? elm.single : `in ${unit} ${elm.many}`;
      }
    }

    return 'just now';
  }
}
