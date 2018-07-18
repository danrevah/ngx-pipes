import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "range" })
export class RangePipe implements PipeTransform {
  transform(start: number = 1, count: number = 0, step: number = 1): any {
    return Array(count)
      .fill("")
      .map((v, i) => step * i + start);
  }
}
