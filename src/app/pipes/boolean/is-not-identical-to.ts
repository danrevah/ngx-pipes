import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'isNotIdenticalTo'})
export class IsNotIdenticalToPipe implements PipeTransform {

  transform(value: any, other: any): boolean {
    return value !== other;
  }
}
