import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'repeat'})
export class RepeatPipe implements PipeTransform {

  transform(str: string, n: number = 1, separator: string = ''): string {
    if (n <= 0) {
      throw new RangeError();
    }
    return n == 1 ? str : this.repeat(str, n - 1, separator);
  }

  private repeat(str: string, n: number, separator: string): string {
    return n == 0 ? str : (str + separator + this.repeat(str, n - 1, separator));
  }
}
