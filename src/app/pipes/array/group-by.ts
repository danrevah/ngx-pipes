import { Pipe, PipeTransform } from '@angular/core';
import {extractDeepPropertyByMapKey, isFunction} from '../helpers/helpers';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {

  transform(input: any, discriminator: any = []): any {
    if (!Array.isArray(input)) {
      return input;
    }

    return this.groupBy(input, discriminator);
  }

  private groupBy(list: any[], discriminator: any) {
    return list.reduce((acc, payload) => {
      const key = this.extractKeyByDiscriminator(discriminator, payload);

      acc[key] = Array.isArray(acc[key])
        ? acc[key].concat([payload])
        : [payload];

      return acc;
    }, {});
  }

  private extractKeyByDiscriminator(discriminator, payload) {
    if (isFunction(discriminator)) {
      return (<Function>discriminator)(payload);
    }

    if (Array.isArray(discriminator)) {
      return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join('_');
    }

    return extractDeepPropertyByMapKey(payload, <string>discriminator);
  }
}
