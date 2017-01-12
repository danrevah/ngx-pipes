import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {

  transform(arr: any, props: Array<string>, search: any): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    return arr.filter((obj) => {
      return props.some((prop) =>
        search === GeneralHelper.extractDeepPropertyByMapKey(obj, prop)
      );
    });
  }
}
