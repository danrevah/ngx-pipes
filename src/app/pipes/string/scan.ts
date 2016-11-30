import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'scan'})
export class ScanPipe implements PipeTransform {

  transform(text: string, args: string[] = []): string {
    return text.replace(/\{(\d+)}/g, (match, index) =>
      typeof (args[index]) !== 'undefined' ? args[index] : match);
  }
}
