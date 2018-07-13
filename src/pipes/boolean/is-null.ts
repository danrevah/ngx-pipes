import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isNull" })
export class IsNullPipe implements PipeTransform {
  transform(input: any): boolean {
    return input === null;
  }
}
