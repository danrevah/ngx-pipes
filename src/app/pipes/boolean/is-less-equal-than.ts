import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isLessEqualThan'})
export class IsLessEqualThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value <= other;
  }
}
