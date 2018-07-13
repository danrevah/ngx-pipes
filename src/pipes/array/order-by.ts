import { Pipe, PipeTransform } from "@angular/core";
import { extractDeepPropertyByMapKey, isString, isUndefined } from "../helpers/helpers";

@Pipe({ name: "orderBy" })
export class OrderByPipe implements PipeTransform {
  transform(input: any[], config?: any): any[];
  transform<T>(input: T, config?: any): T;

  transform(input: any, config?: any): any {
    if (!Array.isArray(input)) {
      return input;
    }

    const out = [...input];

    // sort by multiple properties
    if (Array.isArray(config)) {
      return out.sort((a, b) => {
        const l = config.length;
        for (let i = 0; i < l; ++i) {
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
        // tslint:disable-next-line:switch-default
        switch (sign) {
          case "+":
            return out.sort(OrderByPipe.simpleSort.bind(this));
          case "-":
            return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
        }
      }

      return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
    }

    // default sort by value
    return out.sort(OrderByPipe.simpleSort.bind(this));
  }

  private static simpleSort(a: any, b: any) {
    return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
  }

  private static orderCompare(prop: string, asc: boolean, a: any, b: any) {
    const first = extractDeepPropertyByMapKey(a, prop);
    const second = extractDeepPropertyByMapKey(b, prop);

    if (first === second) {
      return 0;
    }

    if (isUndefined(first) || first === "") {
      return 1;
    }

    if (isUndefined(second) || second === "") {
      return -1;
    }

    if (isString(first) && isString(second)) {
      const pos = first.toLowerCase().localeCompare(second.toLowerCase());

      return asc ? pos : -pos;
    }

    return asc ? first - second : second - first;
  }

  private static extractFromConfig(config: any) {
    const sign = config.substr(0, 1);
    const prop = config.replace(/^[-+]/, "");
    const asc = sign !== "-";

    return [prop, asc, sign];
  }
}
