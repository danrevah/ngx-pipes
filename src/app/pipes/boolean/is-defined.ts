import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isDefined'})
export class IsDefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return typeof value !== 'undefined';
  }
}
