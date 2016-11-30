import {PipeTransform, Pipe} from '@angular/core';
import {isString} from '../helpers';

@Pipe({name: 'slugify'})
export class SlugifyPipe implements PipeTransform {

  transform(str: string): string {
    return isString(str) ? str.toLowerCase().replace(/\s+/g, '-') : str;
  }
}
