import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'every'})
export class EveryPipe implements PipeTransform {

  transform(arr: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean {
    return Array.isArray(arr) ? arr.every(predicate) : arr;
  }
}
