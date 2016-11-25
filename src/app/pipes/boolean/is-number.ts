import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isNumber'})
export class IsNumberPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'number';
  }
}
