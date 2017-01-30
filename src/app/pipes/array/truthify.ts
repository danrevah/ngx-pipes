import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'truthify'})
export class TrurthifyPipe implements PipeTransform {

  transform(input: any): any[] {
    return Array.isArray(input)
      ? input.filter(e => !!e)
      : input;
  }
}
