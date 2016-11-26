import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isLessEqualThan'})
export class IsLessEqualThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value <= other;
  }
}
