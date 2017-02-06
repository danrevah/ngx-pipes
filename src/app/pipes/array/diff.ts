import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'diff'})
export class DiffPipe implements PipeTransform {

  transform(input: any, ...args: any[]): any[] {
    if (!Array.isArray(input)) {
      return input;
    }

    return args.reduce((d, c) => d.filter((e: any) => !~c.indexOf(e)), input);
  }
}
