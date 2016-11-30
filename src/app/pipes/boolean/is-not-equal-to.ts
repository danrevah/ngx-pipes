import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isNotEqualTo'})
export class IsNotEqualToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value != other;
  }
}
