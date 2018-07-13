import { Pipe, PipeTransform } from "@angular/core";
import { applyPrecision } from "../helpers/helpers";

@Pipe({ name: "round" })
export class RoundPipe implements PipeTransform {
  transform(num: number, precision: number = 0): number {
    return applyPrecision(num, precision);
  }
}
