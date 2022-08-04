import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  private static YEAR_MS: number = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
  private static MAPPER: any = {
    'en-US': {
      dates: [
        { single: 'last year', many: 'years', div: 1 },
        { single: 'last month', many: 'months', div: 12 },
        { single: 'last week', many: 'weeks', div: 4 },
        { single: 'yesterday', many: 'days', div: 7 },
        { single: 'an hour ago', many: 'hours', div: 24 },
        { single: 'just now', many: 'minutes', div: 60 },
      ],
      invalid: 'Invalid date',
      future: 'in the future',
      default: 'just now',
      manyPattern: '{unit} {many} ago',
    },
    'pt-BR': {
      dates: [
        { single: 'ano passado', many: 'anos', div: 1 },
        { single: 'mês passado', many: 'meses', div: 12 },
        { single: 'semana passada', many: 'semanas', div: 4 },
        { single: 'ontem', many: 'dias', div: 7 },
        { single: 'uma hora atrás', many: 'horas', div: 24 },
        { single: 'agora', many: 'minutos', div: 60 },
      ],
      invalid: 'Data inválida',
      future: 'em breve',
      default: 'agora',
      manyPattern: 'há {unit} {many}',
    },
  };
  /**
   * @param inputDate: Date | Moment - not included as TypeScript interface,
   * in order to keep `ngx-pipes` "pure" from dependencies!
   */
  /**
   * @param locale: String - localeId you want, default is English,
   */
  public transform(inputDate: any, locale: string = 'en-US'): string {
    if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
      return TimeAgoPipe.MAPPER[locale].invalid;
    }

    const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
    const now = +new Date();

    if (past > now) {
      return TimeAgoPipe.MAPPER[locale].future;
    }

    for (
      let i = 0, l = TimeAgoPipe.MAPPER[locale].dates.length, ms = now - past, div = TimeAgoPipe.YEAR_MS;
      i < l;
      ++i
    ) {
      const elm = TimeAgoPipe.MAPPER[locale].dates[i];
      const unit = Math.floor(ms / (div /= elm.div));
      const pattern = TimeAgoPipe.MAPPER[locale].manyPattern;

      if (unit >= 1) {
        if (unit === 1) {
          return elm.single;
        } else {
          const regexMany = new RegExp('{many}', 'g');
          const regexUnit = new RegExp('{unit}', 'g');

          return pattern.replace(regexUnit, unit).replace(regexMany, elm.many);
        }
      }
    }

    return TimeAgoPipe.MAPPER[locale].default;
  }
}
