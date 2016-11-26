import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isLessThan'})
export class IsLessThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value < other;
  }
}
