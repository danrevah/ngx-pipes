import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isLessThan'})
export class IsLessThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value < other;
  }
}
