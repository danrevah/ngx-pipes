import { Pipe, PipeTransform } from '@angular/core';
import { isString, ucFirst } from '../helpers/helpers';

@Pipe({
  name: 'ucfirst',
  standalone: true,
})
export class UcFirstPipe implements PipeTransform {
  transform(input: string): string;
  transform(input: any): any;

  transform(text: any): string {
    return isString(text) ? ucFirst(text) : text;
  }
}
