import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "reverse" })
export class ReversePipe implements PipeTransform {
  transform(input: any): any {
    if (isString(input)) {
      return input
        .split("")
        .reverse()
        .join("");
    }

    return Array.isArray(input) ? input.slice().reverse() : input;
  }
}
