import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'stripTags'})
export class StripTagsPipe implements PipeTransform {

  transform(text:string, ...allowedTags: any[]):string {
    return allowedTags.length > 0
        ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
        : text.replace(/<(?:.|\s)*?>/g, '');
  }
}
