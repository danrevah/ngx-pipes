import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {

  transform(text: string, length: number = 0, suffix: string = '', wordBreak: boolean = true): string {
    return (text.length > length)
      ? (wordBreak
        ? (text.slice(0, length) + suffix)
        : (!!~text.indexOf(' ', length)
          ? (text.slice(0, text.indexOf(' ', length)) + suffix)
          : text
      )
    ) : text;
  }
}
