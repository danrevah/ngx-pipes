import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'ltrim'})
export class LeftTrimPipe implements PipeTransform {

  transform(text:string, [chars = '\\s']:string[] = []):string {
    return text.replace(new RegExp(`^[${chars}]+`), '');
  }
}
