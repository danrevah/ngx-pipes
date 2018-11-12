import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time-ago' })
export class TimeAgoPipe implements PipeTransform {



  public transform(inputDate: Date): string {

    const pastDateValue = Math.abs(inputDate.getTime()); // make the negative returned date positive
    const currentDateValue = new Date().getTime();
    const dateDifferenceValue = currentDateValue - pastDateValue; // in milliseconds

    const seconds = Math.round(Math.abs(dateDifferenceValue) / 1000);
    const minutes = Math.round(Math.abs(seconds) / 60);
    const hours = Math.round(Math.abs(minutes) / 60);
    const days = Math.round(Math.abs(hours) / 24);
    const weeks = Math.round(Math.abs(days) / 7);
    const months = Math.round(Math.abs(weeks) / 4);
    const years = Math.round(Math.abs(months) / 12);

    if (years > 0 && months > 11) {
      return years === 1 ? 'last year' : years + ' years ago';
    } else if (months > 0 && weeks > 3) {
      return months === 1 ? 'last month' : months + ' months ago';
    } else if (weeks > 0 && weeks <= 3 && days > 7) {
      return weeks === 1 ? 'last week' : weeks + ' weeks ago';
    } else if (days > 0 && days <= 6) {
      return days === 1 ? 'yesterday' : days + ' days ago';
    } else if (hours > 0) {
      return hours === 1 ? 'an hour ago' : hours + ' hours ago';
    } else if (minutes > 0) {
      return minutes === 1 ? 'just now' : minutes + ' minutes ago';
    } else {
      return 'just now';
    }
  }
}
