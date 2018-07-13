import { Pipe, PipeTransform } from "@angular/core";
import { isObject } from "../helpers/helpers";

@Pipe({ name: "invertBy" })
export class InvertByPipe implements PipeTransform {
  transform(obj: any, cb?: Function): Object {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).reduce((o: any, k: string) => {
      const key = cb ? cb(obj[k]) : obj[k];

      return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
    }, {});
  }
}
