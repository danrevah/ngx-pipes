import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isGreaterThan'})
export class IsGreaterThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value > other;
  }
}
