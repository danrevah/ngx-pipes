import { Pipe, PipeTransform } from '@angular/core';
import { isString, ucFirst } from '../helpers/helpers';

@Pipe({ name: 'ucwords' })
export class UcWordsPipe implements PipeTransform {
  transform(input: string): string;
  transform(input: any): any;

  transform(text: any): string {
    if (isString(text)) {
      return text
        .split(' ')
        .map((sub: any) => ucFirst(sub))
        .join(' ');
    }

    return text;
  }
}
