import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isEqualTo'})
export class IsEqualToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value == other;
  }
}
