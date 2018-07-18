import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sample" })
export class SamplePipe implements PipeTransform {
  transform(input: any[], len?: number): any[];
  transform<T>(input: T, len?: number): T;

  transform(input: any, len: number = 1): any {
    if (!Array.isArray(input)) {
      return input;
    }

    let sample: any[] = [];
    const tmp = [...input];
    const l = len < tmp.length ? len : tmp.length;
    for (let i = 0; i < l; ++i) {
      sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
    }

    return sample;
  }
}
