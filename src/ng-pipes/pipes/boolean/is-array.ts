import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isArray',
  standalone: true,
})
export class IsArrayPipe implements PipeTransform {
  transform(input: any): boolean {
    return Array.isArray(input);
  }
}
