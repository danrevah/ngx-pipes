import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isNumber'})
export class IsNumberPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'number';
  }
}
