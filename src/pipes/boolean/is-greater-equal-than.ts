import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isGreaterEqualThan" })
export class IsGreaterEqualThanPipe implements PipeTransform {
  transform(input: number, other: number): boolean {
    return input >= other;
  }
}
