import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isFunction'})
export class IsFunctionPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'function';
  }
}
