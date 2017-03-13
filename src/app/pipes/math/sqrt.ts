import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'sqrt'})
export class SqrtPipe implements PipeTransform {

  transform(num: any): number {
    return !isNaN(num)
      ? Math.sqrt(num)
      : num;
  }
}
