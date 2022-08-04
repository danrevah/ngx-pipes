import { TimeAgoPipe } from './time-ago';
import * as moment from 'moment';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  // Dates
  const today = new Date();
  const future = new Date(today.getTime() + 1000 * 20);
  const fewSecondsAgoDate = new Date(today.getTime() - 5 * 1000);
  const aMinuteAgoDate = new Date(today.getTime() - 60 * 1000);
  const fewMinutesAgoDate = new Date(new Date().getTime() - 5 * 60 * 1000);
  const anHourAgoDate = new Date(new Date().getTime() - 60 * 60 * 1000);
  const fewHoursAgoDate = new Date(new Date().getTime() - 5 * 60 * 60 * 1000);
  const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1));
  const fewDaysAgoDate = new Date(new Date().setDate(new Date().getDate() - 3));
  const lastWeekDate = new Date(new Date().setDate(new Date().getDate() - 12));
  const fewWeeksAgoDate = new Date(new Date().setDate(new Date().getDate() - 14));
  const lastMonthDate = new Date(new Date().setDate(new Date().getDate() - 30));
  const fewMonthsAgoDate = new Date(new Date().setDate(new Date().getDate() - 30 * 5));
  const lastYearDate = new Date(new Date().setDate(new Date().getDate() - 366));
  const fewYearsAgoDate = new Date(new Date().setDate(new Date().getDate() - 365 * 5));

  // Strings - English
  const recentlyString = 'just now';
  const futureString = 'in the future';
  const fewMinutesAgoString = 5 + ' minutes ago';
  const anHourAgoString = 'an hour ago';
  const fewHoursAgoString = 5 + ' hours ago';
  const yesterdayString = 'yesterday';
  const fewDaysAgoString = 3 + ' days ago';
  const lastWeekString = 'last week';
  const fewWeeksAgoString = 2 + ' weeks ago';
  const lastMonthString = 'last month';
  const fewMonthsAgoString = 5 + ' months ago';
  const lastYearString = 'last year';
  const fewYearsAgoString = 5 + ' years ago';
  
  // Strings - Brazilian Portuguese
  const recentlyStringBr = 'agora';
  const futureStringBr = 'em breve';
  const fewMinutesAgoStringBr = 'há ' + 5 + ' minutos';
  const anHourAgoStringBr = 'uma hora atrás';
  const fewHoursAgoStringBr = 'há ' + 5 + ' horas';
  const yesterdayStringBr = 'ontem';
  const fewDaysAgoStringBr = 'há ' + 3 + ' dias';
  const lastWeekStringBr = 'semana passada';
  const fewWeeksAgoStringBr = 'há ' + 2 + ' semanas';
  const lastMonthStringBr = 'mês passado';
  const fewMonthsAgoStringBr = 'há ' + 5 + ' meses';
  const lastYearStringBr = 'ano passado';
  const fewYearsAgoStringBr = 'há ' + 5 + ' anos';

  beforeAll(() => {
    pipe = new TimeAgoPipe();
  });

  it('should return just now - English', () => {
    expect(pipe.transform(today)).toEqual(recentlyString);
  });

  it('should return just now - English', () => {
    expect(pipe.transform(fewSecondsAgoDate)).toEqual(recentlyString);
  });

  it('should return just now - English', () => {
    expect(pipe.transform(aMinuteAgoDate)).toEqual(recentlyString);
  });

  it('should return 5 minutes ago - English', () => {
    expect(pipe.transform(fewMinutesAgoDate)).toEqual(fewMinutesAgoString);
  });

  it('should return an hour ago - English', () => {
    expect(pipe.transform(anHourAgoDate)).toEqual(anHourAgoString);
  });

  it('should return 5 hours ago - English', () => {
    expect(pipe.transform(fewHoursAgoDate)).toEqual(fewHoursAgoString);
  });

  it('should return yesterday - English', () => {
    expect(pipe.transform(yesterdayDate)).toEqual(yesterdayString);
  });

  it('should return 5 days ago - English', () => {
    expect(pipe.transform(fewDaysAgoDate)).toEqual(fewDaysAgoString);
  });

  it('should return last week - English', () => {
    expect(pipe.transform(lastWeekDate)).toEqual(lastWeekString);
  });

  it('should return 2 weeks ago - English', () => {
    expect(pipe.transform(fewWeeksAgoDate)).toEqual(fewWeeksAgoString);
  });

  it('should return last month - English', () => {
    expect(pipe.transform(lastMonthDate)).toEqual(lastMonthString);
  });

  it('should return 5 months ago - English', () => {
    expect(pipe.transform(fewMonthsAgoDate)).toEqual(fewMonthsAgoString);
  });

  it('should return last year - English', () => {
    expect(pipe.transform(lastYearDate)).toEqual(lastYearString);
  });

  it('should return 5 years ago - English', () => {
    expect(pipe.transform(fewYearsAgoDate)).toEqual(fewYearsAgoString);
  });

  it('should return in the future - English', () => {
    expect(pipe.transform(future)).toEqual(futureString);
  });

  it('should support moment.js just now - English', () => {
    expect(pipe.transform(moment())).toEqual(recentlyString);
  });

  it('should support moment.js last week - English', () => {
    expect(pipe.transform(moment().subtract(10, 'days'))).toEqual(lastWeekString);
  });

  it('should return just now - Brazilian Portuguese', () => {
    expect(pipe.transform(today, 'pt-BR')).toEqual(recentlyStringBr);
  });

  it('should return just now - Brazilian Portuguese', () => {
    expect(pipe.transform(fewSecondsAgoDate, 'pt-BR')).toEqual(recentlyStringBr);
  });

  it('should return just now - Brazilian Portuguese', () => {
    expect(pipe.transform(aMinuteAgoDate, 'pt-BR')).toEqual(recentlyStringBr);
  });

  it('should return 5 minutes ago - Brazilian Portuguese', () => {
    expect(pipe.transform(fewMinutesAgoDate, 'pt-BR')).toEqual(fewMinutesAgoStringBr);
  });

  it('should return an hour ago - Brazilian Portuguese', () => {
    expect(pipe.transform(anHourAgoDate, 'pt-BR')).toEqual(anHourAgoStringBr);
  });

  it('should return 5 hours ago - Brazilian Portuguese', () => {
    expect(pipe.transform(fewHoursAgoDate, 'pt-BR')).toEqual(fewHoursAgoStringBr);
  });

  it('should return yesterday - Brazilian Portuguese', () => {
    expect(pipe.transform(yesterdayDate, 'pt-BR')).toEqual(yesterdayStringBr);
  });

  it('should return 5 days ago - Brazilian Portuguese', () => {
    expect(pipe.transform(fewDaysAgoDate, 'pt-BR')).toEqual(fewDaysAgoStringBr);
  });

  it('should return last week - Brazilian Portuguese', () => {
    expect(pipe.transform(lastWeekDate, 'pt-BR')).toEqual(lastWeekStringBr);
  });

  it('should return 2 weeks ago - Brazilian Portuguese', () => {
    expect(pipe.transform(fewWeeksAgoDate, 'pt-BR')).toEqual(fewWeeksAgoStringBr);
  });

  it('should return last month - Brazilian Portuguese', () => {
    expect(pipe.transform(lastMonthDate, 'pt-BR')).toEqual(lastMonthStringBr);
  });

  it('should return 5 months ago - Brazilian Portuguese', () => {
    expect(pipe.transform(fewMonthsAgoDate, 'pt-BR')).toEqual(fewMonthsAgoStringBr);
  });

  it('should return last year - Brazilian Portuguese', () => {
    expect(pipe.transform(lastYearDate, 'pt-BR')).toEqual(lastYearStringBr);
  });

  it('should return 5 years ago - Brazilian Portuguese', () => {
    expect(pipe.transform(fewYearsAgoDate, 'pt-BR')).toEqual(fewYearsAgoStringBr);
  });

  it('should return in the future - Brazilian Portuguese', () => {
    expect(pipe.transform(future, 'pt-BR')).toEqual(futureStringBr);
  });

  it('should support moment.js just now - Brazilian Portuguese', () => {
    expect(pipe.transform(moment(), 'pt-BR')).toEqual(recentlyStringBr);
  });

  it('should support moment.js last week - Brazilian Portuguese', () => {
    expect(pipe.transform(moment().subtract(10, 'days'), 'pt-BR')).toEqual(lastWeekStringBr);
  });
});
