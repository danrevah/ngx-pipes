import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "slugify" })
export class SlugifyPipe implements PipeTransform {
  transform(str: string): string {
    return isString(str)
      ? str
          .toLowerCase()
          .trim()
          .replace(/[^\w\-]+/g, " ")
          .replace(/\s+/g, "-")
      : str;
  }
}
