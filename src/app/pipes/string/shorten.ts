import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {

  transform(text:string, [length = 0, suffix = '', wordBreak = true]:any[] = []):string {
    return (text.length > length)
        ? (wordBreak
            ? (text.slice(0, length) + suffix)
            : (!!~text.indexOf(' ', length)
                ? (text.slice(0, text.indexOf(' ', length)) + suffix)
                : text
              )
          )
        : text;
  }
}
