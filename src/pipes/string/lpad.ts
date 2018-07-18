import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "lpad" })
export class LeftPadPipe implements PipeTransform {
  transform(str: string, length: number, padCharacter: string = " "): string {
    if (!isString(str) || str.length >= length) {
      return str;
    }
    while (str.length < length) {
      str = padCharacter + str;
    }

    return str;
  }
}
