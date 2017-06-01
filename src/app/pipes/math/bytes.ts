import {PipeTransform, Pipe} from '@angular/core';
import {isNumberFinite, isUndefined, applyPrecision} from '../helpers/helpers';

@Pipe({name: 'bytes'})
export class BytesPipe implements PipeTransform {
  private dictionary: Array<{max: number, type: string}> = [
    { max: 1e3, type: 'B' },
    { max: 1e6, type: 'KB' },
    { max: 1e9, type: 'MB' },
    { max: 1e12, type: 'GB' }
  ];

  transform(value: number, precision?: number): string | number {
    if (!isNumberFinite(value)) {
      return NaN;
    }

    const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
    const calc = value / (format.max / 1e3);
    const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
    return `${num} ${format.type}`;
  }
}
