import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortScaleNumber', pure: false })
export class ShortScaleNumberPipe implements PipeTransform {
  transform(number: any) {
    if (number < 1000) {
      return number;
    } else {
      const absNumber = Math.abs(number);
      if (absNumber >= Math.pow(10, 12)) {
        number = (number / Math.pow(10, 12)).toFixed(1) + 'T';
      } else if (absNumber < Math.pow(10, 12) && absNumber >= Math.pow(10, 9)) {
        number = (number / Math.pow(10, 9)).toFixed(1) + 'B';
      } else if (absNumber < Math.pow(10, 9) && absNumber >= Math.pow(10, 6)) {
        number = (number / Math.pow(10, 6)).toFixed(1) + 'M';
      } else if (absNumber < Math.pow(10, 6) && absNumber >= Math.pow(10, 3)) {
        number = (number / Math.pow(10, 3)).toFixed(1) + 'K';
      }
      return number;
    }
  }
}

