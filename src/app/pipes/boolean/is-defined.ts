import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isDefined'})
export class IsDefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value !== 'undefined';
  }
}
