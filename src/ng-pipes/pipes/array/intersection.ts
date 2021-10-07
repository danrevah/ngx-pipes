import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'intersection' })
export class IntersectionPipe implements PipeTransform {
  transform<T>(input: T, ...args: any[]): T;
  transform(input: any[], ...args: any[]): any[];

  transform(input: any, ...args: any[]): any {
    if (!Array.isArray(input)) {
      return input;
    }

    // tslint:disable-next-line no-bitwise
    return args.reduce((n, c) => n.filter((e: any) => !!~c.indexOf(e)), input);
  }
}
