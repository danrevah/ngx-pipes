import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isGreaterThan',
  standalone: true,
})
export class IsGreaterThanPipe implements PipeTransform {
  transform(input: number, other: number): boolean {
    return input > other;
  }
}
