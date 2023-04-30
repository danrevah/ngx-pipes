import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLessThan',
  standalone: true,
})
export class IsLessThanPipe implements PipeTransform {
  transform(input: number, other: number): boolean {
    return input < other;
  }
}
