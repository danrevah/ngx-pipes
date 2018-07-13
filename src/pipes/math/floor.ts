import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "floor" })
export class FloorPipe implements PipeTransform {
  transform(num: number, precision: number = 0): number {
    if (precision <= 0) {
      return Math.floor(num);
    }

    const tho = 10 ** precision;

    return Math.floor(num * tho) / tho;
  }
}
