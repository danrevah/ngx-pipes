import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isEqualTo'})
export class IsEqualToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value == other;
  }
}
