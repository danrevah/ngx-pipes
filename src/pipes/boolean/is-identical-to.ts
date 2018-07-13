import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isIdenticalTo" })
export class IsIdenticalToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    return input === other;
  }
}
