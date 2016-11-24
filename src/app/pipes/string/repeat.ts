import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'repeat'})
export class RepeatPipe implements PipeTransform {

  transform(str:string, [n = 1, separator = '']: any[] = []):string {
    let times: number = ~~n;
    if (times <= 0) {
      throw new RangeError();
    }
    return times == 1 ? str : this.repeat(str, times - 1, separator);
  }

  private repeat(str: string, n: number, separator: string): string {
    return n == 0 ? str : (str + separator + this.repeat(str, n - 1, separator));
  }
}
