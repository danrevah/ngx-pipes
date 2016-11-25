import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isObject'})
export class IsObjectPipe implements PipeTransform {

  transform(value: any): boolean {
    return value !== null && typeof value === 'object';
  }
}
