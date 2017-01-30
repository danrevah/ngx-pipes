import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'unique'})
export class UniquePipe implements PipeTransform {

  transform(input: any): any[] {
    return Array.isArray(input)
      ? input.filter((e, i) => input.indexOf(e) === i)
      : input;
  }
}
