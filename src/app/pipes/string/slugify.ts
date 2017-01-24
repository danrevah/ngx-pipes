import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers';

@Pipe({name: 'slugify'})
export class SlugifyPipe implements PipeTransform {

  transform(str: string): string {
    return GeneralHelper.isString(str)
      ? str.toLowerCase()
      .replace(/[^a-z0-9-]/g, ' ')
      .replace(/\s+/g, '-')
      : str;
  }
}
