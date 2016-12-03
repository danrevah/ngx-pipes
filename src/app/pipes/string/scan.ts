import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'scan'})
export class ScanPipe implements PipeTransform {

  transform(text: string, args: string[] = []): string {
    return GeneralHelper.isString(text)
      ? text.replace(/\{(\d+)}/g, (match, index) => typeof (args[index]) !== 'undefined' ? args[index] : match)
      : text;
  }
}
