import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'sample'})
export class SamplePipe implements PipeTransform {

  transform(arr: any[], len: number = 1): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    let sample = [];
    for (let i = 0, tmp = [...arr], l = len < tmp.length ? len : tmp.length; i < l; ++i) {
      const j = Math.floor(Math.random() * tmp.length);
      sample = sample.concat(tmp.splice(j ,1));
    }

    return sample;
  }
}
