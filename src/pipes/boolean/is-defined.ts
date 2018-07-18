import { Pipe, PipeTransform } from "@angular/core";
import { isUndefined } from "../helpers/helpers";

@Pipe({ name: "isDefined" })
export class IsDefinedPipe implements PipeTransform {
  transform(input: any): boolean {
    return !isUndefined(input);
  }
}
