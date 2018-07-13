import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "max" })
export class MaxPipe implements PipeTransform {
  transform(arr: any): number | number[] {
    return Array.isArray(arr) ? Math.max(...arr) : arr;
  }
}
