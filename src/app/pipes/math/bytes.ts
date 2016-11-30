import {PipeTransform, Pipe} from '@angular/core';
import {isNumberFinite} from '../helpers';

@Pipe({name: 'bytes'})
export class BytesPipe implements PipeTransform {

  transform(value: number): string | number {
    if (!isNumberFinite(value)) {
      return NaN;
    }

    const dictionary: Array<{max: number, type: string}> = [
      { max: 1e3, type: 'B' },
      { max: 1e6, type: 'KB' },
      { max: 1e9, type: 'MB' },
      { max: 1e12, type: 'GB' }
    ];

    const format = dictionary.find(d => value < d.max) || dictionary[dictionary.length - 1];
    const num = value / (format.max / 1e3);
    return `${num} ${format.type}`;
  }
}
