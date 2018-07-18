import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "shuffle" })
export class ShufflePipe implements PipeTransform {
  transform(input: any[]): any[];
  transform<T>(input: T): T;

  // Using a version of the Fisher-Yates shuffle algorithm
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  transform(input: any): any {
    if (!Array.isArray(input)) {
      return input;
    }

    const shuffled = [...input];
    const n = input.length - 1;
    for (let i = 0; i < n; ++i) {
      const j = Math.floor(Math.random() * (n - i + 1)) + i;
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
}
