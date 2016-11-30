import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isFunction'})
export class IsFunctionPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'function';
  }
}
