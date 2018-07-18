import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "lines" })
export class LinesPipe implements PipeTransform {
  transform(text: any, chars: string = "\\s"): Array<string> | any {
    return isString(text) ? text.replace(/\r\n/g, "\n").split("\n") : text;
  }
}
