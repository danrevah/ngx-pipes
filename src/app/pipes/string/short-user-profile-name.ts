import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'shortUserProfileName' })
export class ShortUserProfileNamePipe implements PipeTransform {

  transform(text: string) {
    let result: string[];
    if (text === null || text === undefined || text === '') {
      return text;
    } else {
      result = text.toUpperCase().trim().split(" ");
      return (result.length == 3) ? result[0][0] + result[2][0] : (result.length == 2) ? result[0][0] + result[1][0] : result[0][0] + result[0][1];
    }
  }
}
