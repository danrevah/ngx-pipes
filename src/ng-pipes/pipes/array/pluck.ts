import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey, isObject } from '../helpers/helpers';

@Pipe({ name: 'pluck', pure: false })
export class PluckPipe implements PipeTransform {
  transform<T, K extends keyof T>(input: T, map: keyof T): T[K];
  transform(input: any[], map: string): any[];
  transform(input: any, map: string): any;

  transform(input: any, map: string): any {
    if (Array.isArray(input)) {
      return input.map(e => extractDeepPropertyByMapKey(e, map));
    }

    return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
  }
}
