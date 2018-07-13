import { Pipe, PipeTransform } from "@angular/core";
import { isString } from "../helpers/helpers";

@Pipe({ name: "match" })
export class MatchPipe implements PipeTransform {
  transform(text: string, pattern: string, flags?: string): RegExpMatchArray | null;
  transform<T>(text: T, pattern: string, flags?: string): T;

  transform(text: any, pattern: string, flags?: string): any {
    if (!isString(text)) {
      return text;
    }

    return text.match(new RegExp(pattern, flags));
  }
}
