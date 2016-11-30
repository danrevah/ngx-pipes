import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isArray'})
export class IsArrayPipe implements PipeTransform {

  transform(value: any): boolean {
    return Array.isArray(value);
  }
}
