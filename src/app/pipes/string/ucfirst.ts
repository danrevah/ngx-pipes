import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'ucfirst'})
export class UcFirstPipe implements PipeTransform {

  transform(text:string):string {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  }
}
