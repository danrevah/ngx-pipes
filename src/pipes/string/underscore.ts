import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "underscore" })
export class UnderscorePipe implements PipeTransform {
  transform(input: string, chars?: string): string;
  transform(input: any, chars?: string): any;

  transform(text: any, chars: string = "\\s"): string {
    return isString(text)
      ? text
          .trim()
          .replace(/\s+/g, "")
          .replace(/[A-Z]/g, (c: string, k: any) => {
            return k ? `_${c.toLowerCase()}` : c.toLowerCase();
          })
      : text;
  }
}
