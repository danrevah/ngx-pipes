import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isGreaterThan'})
export class IsGreaterThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value > other;
  }
}
