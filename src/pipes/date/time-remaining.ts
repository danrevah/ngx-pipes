import { Pipe, PipeTransform } from '@angular/core';
import { isNumberFinite } from '../helpers/helpers';

@Pipe({ name: 'timeRemaining' })
export class TimeRemainingPipe implements PipeTransform {
  private static DAY_IN_SECONDS = 86400;

  /**
   * Transform seconds to string in format HH:mm:ss. Returns value as is if not input is not valid.
   *
   * @param {any} value - Number of seconds between 0 and 86399 (1 second less than 1 day in seconds)
   * @returns {any}
   */
  transform(value: any) {
    if (!isNumberFinite(value) || (value < 0 || value >= TimeRemainingPipe.DAY_IN_SECONDS)) {
      return value;
    }

    const date = new Date(null);
    date.setSeconds(value);

    return date.toISOString().substr(11, 8);
  }
}
