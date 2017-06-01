import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'unique' })
export class UniquePipe implements PipeTransform {

  transform(input: any, propertyName?: string): any[] {
    const uniques: boolean[] = [];
    return Array.isArray(input) ?
      typeof propertyName === 'undefined' ?
        input.filter((e, i) => input.indexOf(e) === i) :
        input.filter((e, i) => {
          if (typeof e !== 'object' || !e.hasOwnProperty(propertyName) || uniques[e[propertyName]]) {
            return false;
          }
          uniques[e[propertyName]] = true;
          return true;
        }) : input;
  }
}
