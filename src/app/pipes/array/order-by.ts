import {PipeTransform, Pipe} from '@angular/core';
import {isString, extractDeepPropertyByMapKey} from '../helpers/helpers';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

  transform(arr: any, config?: any): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    const out = [...arr];

    // sort by multiple properties
    if (Array.isArray(config)) {
      return out.sort((a, b) => {
        for (let i=0, l=config.length; i<l; ++i) {
          const [prop, asc] = OrderByPipe.extractFromConfig(config[i]);
          const pos = OrderByPipe.orderCompare(prop, asc, a, b);
          if (pos !== 0) {
            return pos;
          }
        }
        return 0;
      });
    }

    // sort by a single property value
    if (isString(config)) {
      const [prop, asc, sign] = OrderByPipe.extractFromConfig(config);

      if (config.length === 1) {
        switch (sign) {
          case '+': return out.sort();
          case '-': return out.sort().reverse();
        }
      }

      return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
    }

    // default sort by value
    return out.sort((a, b) => {
      return isString(a) && isString(b)
        ? a.toLowerCase().localeCompare(b.toLowerCase())
        : a - b;
    });
  }

  static orderCompare(prop, asc, a, b) {
    const first = extractDeepPropertyByMapKey(a, prop),
          second = extractDeepPropertyByMapKey(b, prop);

    if (first === second) {
      return 0;
    }

    if (isString(first) && isString(second)) {
      const pos = first.toLowerCase().localeCompare(second.toLowerCase());
      return asc ? pos : -pos;
    }

    return asc
      ? first - second
      : second - first;
  }

  static extractFromConfig(config) {
    const sign = config.substr(0, 1);
    const prop = config.replace(/^[-+]/, '');
    const asc = sign !== '-';

    return [prop, asc, sign];
  }
}
