import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "some" })
export class SomePipe implements PipeTransform {
  transform(input: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean;
  transform<T>(input: T, predicate: (value: any, index: number, array: any[]) => boolean): T;

  transform(input: any, predicate: (value: any, index: number, array: any[]) => boolean): any {
    return Array.isArray(input) ? input.some(predicate) : input;
  }
}
