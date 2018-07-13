import { Pipe, PipeTransform } from "@angular/core";
import { extractDeepPropertyByMapKey } from "../helpers/helpers";

@Pipe({ name: "pluck", pure: false })
export class PluckPipe implements PipeTransform {
  transform(input: any[], map: string): any[];
  transform<T>(input: T, map: string): T;

  transform(input: any, map: string): any {
    return Array.isArray(input) ? input.map(e => extractDeepPropertyByMapKey(e, map)) : input;
  }
}
