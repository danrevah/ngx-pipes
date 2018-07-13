import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "diff" })
export class DiffPipe implements PipeTransform {
  transform(input: any[], ...args: any[]): any[];
  transform<T>(input: T, ...args: any[]): T;

  transform(input: any, ...args: any[]): any {
    if (!Array.isArray(input)) {
      return input;
    }

    // tslint:disable-next-line no-bitwise
    return args.reduce((d, c) => d.filter((e: any) => !~c.indexOf(e)), input);
  }
}
