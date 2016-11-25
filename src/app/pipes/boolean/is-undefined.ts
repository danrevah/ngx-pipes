import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isUndefined'})
export class IsUndefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value === 'undefined';
  }
}
