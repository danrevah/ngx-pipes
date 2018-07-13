import { Pipe, PipeTransform } from "@angular/core";
import { isString, isUndefined } from "../helpers/helpers";

@Pipe({ name: "scan" })
export class ScanPipe implements PipeTransform {
  transform(text: string, args: string[] = []): string {
    return isString(text)
      ? text.replace(/\{(\d+)}/g, (match, index) => (!isUndefined(args[index]) ? args[index] : match))
      : text;
  }
}
