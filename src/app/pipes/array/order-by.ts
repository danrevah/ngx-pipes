import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

  transform(arr: any, config?: any): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    const out = [...arr];

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

    if (GeneralHelper.isString(config)) {
      const [prop, asc] = OrderByPipe.extractFromConfig(config);

      if (config.length === 1) {
        return asc ? out.sort() : out.sort().reverse();
      }

      return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
    }

    return out.sort((a, b) => GeneralHelper.isString(a) && GeneralHelper.isString(b)
        ? a.toLowerCase().localeCompare(b.toLowerCase())
        : a - b);
  }

  static orderCompare(prop, asc, a, b) {
    if (GeneralHelper.isString(a) && GeneralHelper.isString(b)) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    const fir = GeneralHelper.extractDeepPropertyByMapKey(a, prop);
    const sec = GeneralHelper.extractDeepPropertyByMapKey(b, prop);

    if (fir === sec) {
      return 0;
    }

    const pos = fir < sec ? -1 : 1;
    return asc ? pos : -pos;
  }

  static extractFromConfig(config) {
    const sign = config.substr(0, 1);
    const prop = config.replace(/^[-+]/, '');
    const asc = sign !== '-';

    return [prop, asc];
  }
}
