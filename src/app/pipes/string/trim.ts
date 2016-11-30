import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return text.replace(new RegExp(
      `^[${chars}]+|[${chars}]+$`, 'g'
    ), '');
  }
}
