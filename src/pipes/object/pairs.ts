import { Pipe, PipeTransform } from "@angular/core";
import { isObject } from "../helpers/helpers";

@Pipe({ name: "pairs" })
export class PairsPipe implements PipeTransform {
  transform(obj: any): any[] {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).map(k => [k, obj[k]]);
  }
}
