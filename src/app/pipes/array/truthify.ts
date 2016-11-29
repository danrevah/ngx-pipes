import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'truthify'})
export class TrurthifyPipe implements PipeTransform {

  transform(arr: any[]): any[] {
    return arr.filter(elm => !!elm);
  }
}
