import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sqrt" })
export class SqrtPipe implements PipeTransform {
  transform(num: number): number;
  transform<T>(num: T): T;

  transform(num: any): any {
    return !isNaN(num) ? Math.sqrt(num) : num;
  }
}
