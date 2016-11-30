import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isNotIdenticalTo'})
export class IsNotIdenticalToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value !== other;
  }
}
