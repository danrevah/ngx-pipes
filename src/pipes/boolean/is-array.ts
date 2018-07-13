import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isArray" })
export class IsArrayPipe implements PipeTransform {
  transform(input: any): boolean {
    return Array.isArray(input);
  }
}
