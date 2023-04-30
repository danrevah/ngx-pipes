import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotIdenticalTo',
  standalone: true,
})
export class IsNotIdenticalToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    return input !== other;
  }
}
