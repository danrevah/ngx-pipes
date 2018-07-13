import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "initial" })
export class InitialPipe implements PipeTransform {
  transform(input: any[], num: number): any[];
  transform(input: any): any;

  transform(input: any, num: number = 0): any[] {
    return Array.isArray(input) ? input.slice(0, input.length - num) : input;
  }
}
