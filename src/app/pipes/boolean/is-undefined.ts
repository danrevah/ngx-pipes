import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isUndefined'})
export class IsUndefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'undefined';
  }
}
