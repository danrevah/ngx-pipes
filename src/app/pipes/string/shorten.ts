import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {

  transform(text: string, length: number = 0, suffix: string = '', wordBreak: boolean = true): string {
    if (text.length > length) {
      if (wordBreak) {
        return text.slice(0, length) + suffix;
      }
      if (!!~text.indexOf(' ', length)) {
        return text.slice(0, text.indexOf(' ', length)) + suffix;
      }
    }

    return text;
  }
}
