import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isNull'})
export class IsNullPipe implements PipeTransform {

  transform(value: any): boolean {
    return value === null;
  }
}
