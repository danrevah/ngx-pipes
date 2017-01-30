import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'tail'})
export class TailPipe implements PipeTransform {

  transform(input: any, num: number = 0): any[] {
    return Array.isArray(input) ? input.slice(num) : input;
  }
}
