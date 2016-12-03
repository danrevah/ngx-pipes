import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'without'})
export class WithoutPipe implements PipeTransform {

  transform(arr: any, args: any[] = []): any[] {
    return Array.isArray(arr)
      ? arr.filter(elm => !~args.indexOf(elm))
      : arr;
  }
}
