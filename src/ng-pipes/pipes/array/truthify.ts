import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truthify' })
export class TruthifyPipe implements PipeTransform {
  transform(input: any[]): any[];
  transform<T>(input: T): T;

  transform(input: any): any {
    return Array.isArray(input) ? input.filter(e => !!e) : input;
  }
}
