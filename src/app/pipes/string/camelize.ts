import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'camelize'})
export class CamelizePipe implements PipeTransform {

  transform(text: any, chars: string = '\\s'): string {
    if (!GeneralHelper.isString(text)) {
      return text;
    }

    return text.toLowerCase().split(/[-_\s]/g).filter(v => !!v).map((word, key) => {
      return !key ? word : (word.slice(0, 1).toUpperCase() + word.slice(1))
    }).join('');
  }
}
