import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotEqualTo',
  standalone: true,
})
export class IsNotEqualToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    // tslint:disable-next-line:triple-equals
    return input != other;
  }
}
