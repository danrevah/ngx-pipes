import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tail' })
export class TailPipe implements PipeTransform {
  transform<T>(input: T, num?: number): T;
  transform(input: any[], num?: number): any[];

  transform(input: any, num: number = 0): any {
    return Array.isArray(input) ? input.slice(num) : input;
  }
}
