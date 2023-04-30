import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';

@Pipe({
  name: 'isObject',
  standalone: true,
})
export class IsObjectPipe implements PipeTransform {
  transform(input: any): boolean {
    return isObject(input);
  }
}
