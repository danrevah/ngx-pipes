import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'without'})
export class WithoutPipe implements PipeTransform {

  transform(input: any, args: any[] = []): any[] {
    return Array.isArray(input)
      ? input.filter(e => !~args.indexOf(e))
      : input;
  }
}
