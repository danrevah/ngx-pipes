import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isIdenticalTo'})
export class IsIdenticalToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value === other;
  }
}
