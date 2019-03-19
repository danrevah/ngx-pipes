import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  private static YEAR_MS: number = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
  private static MAPPER: any = [
    { single: 'last year', many: 'years', div: 1 },
    { single: 'last month', many: 'months', div: 12 },
    { single: 'last week', many: 'weeks', div: 4 },
    { single: 'yesterday', many: 'days', div: 7 },
    { single: 'an hour ago', many: 'hours', div: 24 },
    { single: 'just now', many: 'minutes', div: 60 },
  ];

  /**
   * @param inputDate: Date | Moment - not included as TypeScript interface,
   * in order to keep `ngx-pipes` "pure" from dependencies!
   */
  public transform(inputDate: any): string {
    if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
      return 'Invalid date';
    }

    const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
    const now = +new Date();

    if (past > now) {
      return 'in the future';
    }

    for (let i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
      const elm = TimeAgoPipe.MAPPER[i];
      const unit = Math.floor(ms / (div /= elm.div));

      if (unit >= 1) {
        return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
      }
    }

    return 'just now';
  }
}
