import { TimeAgoPipe } from './time-ago';
import * as moment from 'moment';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  const recentlyString = 'just now';
  const futureString = 'in the future';

  const today = new Date();
  const future = new Date(today.getTime() + 1000 * 20);
  const fewSecondsAgoDate = new Date(today.getTime() - 5 * 1000);
  const aMinuteAgoDate = new Date(today.getTime() - 60 * 1000);

  const fewMinutesAgoString = 5 + ' minutes ago';
  const fewMinutesAgoDate = new Date(new Date().getTime() - 5 * 60 * 1000);

  const anHourAgoString = 'an hour ago';
  const anHourAgoDate = new Date(new Date().getTime() - 60 * 60 * 1000);

  const fewHoursAgoString = 5 + ' hours ago';
  const fewHoursAgoDate = new Date(new Date().getTime() - 5 * 60 * 60 * 1000);

  const yesterdayString = 'yesterday';
  const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1));

  const fewDaysAgoString = 3 + ' days ago';
  const fewDaysAgoDate = new Date(new Date().setDate(new Date().getDate() - 3));

  const lastWeekString = 'last week';
  const lastWeekDate = new Date(new Date().setDate(new Date().getDate() - 8));

  const fewWeeksAgoString = 2 + ' weeks ago';
  const fewWeeksAgoDate = new Date(new Date().setDate(new Date().getDate() - 12));

  const lastMonthString = 'last month';
  const lastMonthDate = new Date(new Date().setDate(new Date().getDate() - 30));

  const fewMonthsAgoString = 5 + ' months ago';
  const fewMonthsAgoDate = new Date(new Date().setDate(new Date().getDate() - 30 * 5));

  const lastYearString = 'last year';
  const lastYearDate = new Date(new Date().setDate(new Date().getDate() - 366));

  const fewYearsAgoString = 5 + ' years ago';
  const fewYearsAgoDate = new Date(new Date().setDate(new Date().getDate() - 365 * 5));

  beforeAll(() => {
    pipe = new TimeAgoPipe();
  });

  it('should return just now', () => {
    expect(pipe.transform(today)).toEqual(recentlyString);
  });

  it('should return just now', () => {
    expect(pipe.transform(fewSecondsAgoDate)).toEqual(recentlyString);
  });

  it('should return just now', () => {
    expect(pipe.transform(aMinuteAgoDate)).toEqual(recentlyString);
  });

  it('should return 5 minutes ago', () => {
    expect(pipe.transform(fewMinutesAgoDate)).toEqual(fewMinutesAgoString);
  });

  it('should return an hour ago', () => {
    expect(pipe.transform(anHourAgoDate)).toEqual(anHourAgoString);
  });

  it('should return 5 hours ago', () => {
    expect(pipe.transform(fewHoursAgoDate)).toEqual(fewHoursAgoString);
  });

  it('should return yesterday', () => {
    expect(pipe.transform(yesterdayDate)).toEqual(yesterdayString);
  });

  it('should return 5 days ago', () => {
    expect(pipe.transform(fewDaysAgoDate)).toEqual(fewDaysAgoString);
  });

  it('should return last week', () => {
    expect(pipe.transform(lastWeekDate)).toEqual(lastWeekString);
  });

  it('should return 2 weeks ago', () => {
    expect(pipe.transform(fewWeeksAgoDate)).toEqual(fewWeeksAgoString);
  });

  it('should return last month', () => {
    expect(pipe.transform(lastMonthDate)).toEqual(lastMonthString);
  });

  it('should return 5 months ago', () => {
    expect(pipe.transform(fewMonthsAgoDate)).toEqual(fewMonthsAgoString);
  });

  it('should return last year', () => {
    expect(pipe.transform(lastYearDate)).toEqual(lastYearString);
  });

  it('should return 5 years ago', () => {
    expect(pipe.transform(fewYearsAgoDate)).toEqual(fewYearsAgoString);
  });

  it('should return in the future', () => {
    expect(pipe.transform(future)).toEqual(futureString);
  });

  it('should support moment.js just now', () => {
    expect(pipe.transform(moment())).toEqual('just now');
  });

  it('should support moment.js last week', () => {
    expect(pipe.transform(moment().subtract(10, 'days'))).toEqual('last week');
  });
});
