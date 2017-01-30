import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'shuffle'})
export class ShufflePipe implements PipeTransform {

  // Using a version of the Fisher-Yates shuffle algorithm
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  transform(input: any): any[] {
    if (!Array.isArray(input)) {
      return input;
    }

    let shuffled = [...input];
    for (let i = 0, n = input.length - 1, l = n - 1; i < l; ++i) {
      const j = Math.floor(Math.random() * (n - i + 1)) + i;
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
}
