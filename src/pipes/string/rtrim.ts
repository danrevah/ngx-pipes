import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "rtrim" })
export class RightTrimPipe implements PipeTransform {
  transform(text: string, chars: string = "\\s"): string {
    return isString(text) ? text.replace(new RegExp(`[${chars}]+$`), "") : text;
  }
}
