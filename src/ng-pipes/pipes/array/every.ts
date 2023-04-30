import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'every',
  standalone: true,
})
export class EveryPipe implements PipeTransform {
  transform(input: any, predicate: (value: any, index: number, array: any[]) => boolean): boolean | any[] {
    return Array.isArray(input) ? input.every(predicate) : false;
  }
}
