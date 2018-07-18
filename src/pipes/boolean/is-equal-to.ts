import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isEqualTo" })
export class IsEqualToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    // tslint:disable-next-line:triple-equals
    return input == other;
  }
}
