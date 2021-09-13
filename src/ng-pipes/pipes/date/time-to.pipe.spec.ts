import { TimeToPipe } from './time-to.pipe';

describe('TimeToPipe', () => {
  let pipe: TimeToPipe;
  const today = new Date();
  const past = new Date(today.getTime() - 1000 * 20);

  const recentlyString = 'just now';
  const pastString = 'in the past';

  const fewSecondsAgoDate = new Date(today.getTime() + 5 * 1000);
  const aMinuteAgoDate = new Date(today.getTime() + 60 * 1000);

  const fewMinutesToString = 'in 5 minutes';
  const fewMinutesToDate = new Date(new Date().getTime() + 5 * 60 * 1000);

  const anHourToString = 'in an hour';
  const anHourToDate = new Date(new Date().getTime() + 60 * 60 * 1000);

  const fewHoursToString = 'in 5 hours';
  const fewHoursToDate = new Date(new Date().getTime() + 5 * 60 * 60 * 1000);

  const tomorrowString = 'tomorrow';
  const tomorrowDate = new Date(new Date().setDate(new Date().getDate() + 1));

  const fewDaysToString = 'in 3 days';
  const fewDaysToDate = new Date(new Date().setDate(new Date().getDate() + 3));

  const nextWeekString = 'next week';
  const nextWeekDate = new Date(new Date().setDate(new Date().getDate() + 7));

  const fewWeeksToString = 'in 2 weeks';
  const fewWeeksToDate = new Date(new Date().setDate(new Date().getDate() + 14));

  const nextMonthString = 'next month';
  const nextMonthDate = new Date(new Date().setDate(new Date().getDate() + 30));

  const fewMonthsToString = 'in 5 months';
  const fewMonthsToDate = new Date(new Date().setDate(new Date().getDate() + 30 * 5));

  const nextYearString = 'next year';
  const nextYearDate = new Date(new Date().setDate(new Date().getDate() + 366));

  const fewYearsToString = 'in 5 years';
  const fewYearsToDate = new Date(new Date().setDate(new Date().getDate() + 366 * 5));

  beforeAll(() => {
    pipe = new TimeToPipe();
  });

  it('should return just now', () => {
    expect(pipe.transform(new Date())).toEqual(recentlyString);
  });

  it('should return just now', () => {
    expect(pipe.transform(fewSecondsAgoDate)).toEqual(recentlyString);
  });

  it('should return just now', () => {
    expect(pipe.transform(aMinuteAgoDate)).toEqual(recentlyString);
  });

  it('should return in the past', () => {
    expect(pipe.transform(past)).toEqual(pastString);
  });

  it('should return in 5 minutes', () => {
    expect(pipe.transform(fewMinutesToDate)).toEqual(fewMinutesToString);
  });

  it('should return in an hour', () => {
    expect(pipe.transform(anHourToDate)).toEqual(anHourToString);
  });

  it('should return in 5 hours', () => {
    expect(pipe.transform(fewHoursToDate)).toEqual(fewHoursToString);
  });

  it('should return tomorrow', () => {
    expect(pipe.transform(tomorrowDate)).toEqual(tomorrowString);
  });

  it('should return in 5 days', () => {
    expect(pipe.transform(fewDaysToDate)).toEqual(fewDaysToString);
  });

  it('should return next week', () => {
    expect(pipe.transform(nextWeekDate)).toEqual(nextWeekString);
  });

  it('should return in 2 weeks', () => {
    expect(pipe.transform(fewWeeksToDate)).toEqual(fewWeeksToString);
  });

  it('should return next month', () => {
    expect(pipe.transform(nextMonthDate)).toEqual(nextMonthString);
  });

  it('should return in 5 months', () => {
    expect(pipe.transform(fewMonthsToDate)).toEqual(fewMonthsToString);
  });

  it('should return next year', () => {
    expect(pipe.transform(nextYearDate)).toEqual(nextYearString);
  });

  it('should return in 5 years', () => {
    expect(pipe.transform(fewYearsToDate)).toEqual(fewYearsToString);
  });
});
