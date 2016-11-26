import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isGreaterEqualThan'})
export class IsGreaterEqualThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value >= other;
  }
}
