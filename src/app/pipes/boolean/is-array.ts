import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isArray'})
export class IsArrayPipe implements PipeTransform {

  transform(value: any): boolean {
    return Array.isArray(value);
  }
}
