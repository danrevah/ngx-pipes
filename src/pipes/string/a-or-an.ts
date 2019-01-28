import { Pipe, PipeTransform } from "@angular/core";
import { isVowel } from "../helpers/helpers";
@Pipe({
  name: "a-or-an",
})
/**
 * Takes a string and returns the string prepended by 'a' or 'an'.
 * Uses both naive and holdout-list approaches.
 * @constructor
 * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
 */
export class AorAnPipe implements PipeTransform {
  private irregularMap: any = {
    herb: "an",
    honor: "an",
    honorable: "an",
    hour: "an",
    mba: "an",
    msc: "an",
    "m.sc.": "an",
    unicorn: "a",
  };
  transform(stringEntity: string): string {
    if (!stringEntity || stringEntity === "") {
      return "";
    } else {
      const firstWord = stringEntity.trim().split(" ")[0];
      if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
        return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
      } else {
        return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
      }
    }
  }
}
