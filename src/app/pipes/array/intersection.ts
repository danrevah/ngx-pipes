import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'intersection'})
export class IntersectionPipe implements PipeTransform {

  transform(input: any, ...args: any[]): any[] {
    if (!Array.isArray(input)) {
      return input;
    }

    return args.reduce((n, c) => n.filter((e: any) => !!~c.indexOf(e)), input);
  }
}
