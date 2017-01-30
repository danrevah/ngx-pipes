import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'some'})
export class SomePipe implements PipeTransform {

  transform(input: any, predicate: (value: any, index: number, array: any[]) => boolean): boolean {
    return Array.isArray(input) ? input.some(predicate) : input;
  }
}
