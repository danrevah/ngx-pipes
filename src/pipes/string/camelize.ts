import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "camelize" })
export class CamelizePipe implements PipeTransform {
  transform(input: string, chars?: string): string;
  transform(input: any, chars?: string): any;

  transform(text: any, chars: string = "\\s"): string {
    if (!isString(text)) {
      return text;
    }

    return text
      .toLowerCase()
      .split(/[-_\s]/g)
      .filter((v: string) => !!v)
      .map((word: string, key: any) => {
        return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
      })
      .join("");
  }
}
