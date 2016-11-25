import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isString'})
export class IsStringPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'string';
  }
}
