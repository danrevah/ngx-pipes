import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isNotEqualTo'})
export class IsNotEqualToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value != other;
  }
}
