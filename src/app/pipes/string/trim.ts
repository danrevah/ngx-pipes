import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {

  transform(text:string, [chars = '\\s']:string[] = []):string {
    return text.replace(new RegExp(
        `^[${chars}]+|[${chars}]+$`, 'g'
    ), '');
  }
}
