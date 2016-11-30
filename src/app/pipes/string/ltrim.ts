import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'ltrim'})
export class LeftTrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return text.replace(new RegExp(`^[${chars}]+`), '');
  }
}
