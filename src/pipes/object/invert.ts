import { Pipe, PipeTransform } from "@angular/core";
import { isObject } from "../helpers/helpers";

@Pipe({ name: "invert" })
export class InvertPipe implements PipeTransform {
  transform(obj: any): Object {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).reduce((o, k) => {
      return Object.assign(o, { [obj[k]]: k });
    }, {});
  }
}
