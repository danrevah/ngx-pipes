import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isLessEqualThan" })
export class IsLessEqualThanPipe implements PipeTransform {
  transform(input: number, other: number): boolean {
    return input <= other;
  }
}
