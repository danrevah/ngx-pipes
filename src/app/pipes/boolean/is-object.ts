import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isObject'})
export class IsObjectPipe implements PipeTransform {

  transform(value: any): boolean {
    return value !== null && typeof value === 'object';
  }
}
