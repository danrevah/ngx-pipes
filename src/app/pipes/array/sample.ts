import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'sample'})
export class SamplePipe implements PipeTransform {

  transform(input: any, len: number = 1): any[] {
    if (!Array.isArray(input)) {
      return input;
    }

    let sample: any[] = [];
    for (let i = 0, tmp = [...input], l = len < tmp.length ? len : tmp.length; i < l; ++i) {
      sample = sample.concat(tmp.splice(
        Math.floor(Math.random() * tmp.length),
        1
      ));
    }

    return sample;
  }
}
