import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isIdenticalTo'})
export class IsIdenticalToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value === other;
  }
}
