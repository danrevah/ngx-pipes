import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'rtrim'})
export class RightTrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return text.replace(new RegExp(`[${chars}]+$`), '');
  }
}
