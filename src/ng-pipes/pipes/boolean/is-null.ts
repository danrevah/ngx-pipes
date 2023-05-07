import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNull',
  standalone: true,
})
export class IsNullPipe implements PipeTransform {
  transform(input: any): boolean {
    return input === null;
  }
}
