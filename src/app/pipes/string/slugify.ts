import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers';

@Pipe({name: 'slugify'})
export class SlugifyPipe implements PipeTransform {

  transform(str: string): string {
    return GeneralHelper.isString(str) ? str.toLowerCase().replace(/\s+/g, '-') : str;
  }
}
