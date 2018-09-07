import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "ucwords" })
export class UcWordsPipe implements PipeTransform {
  transform(input: string, splitter?: string): string;
  transform(input: any, splitter?: string): any;

  transform(text: any, splitter = " "): string {
    if (isString(text)) {
      return text
        .split(splitter)
        .map((sub: any) => sub.slice(0, 1).toUpperCase() + sub.slice(1))
        .join(splitter);
    }

    return text;
  }
}
