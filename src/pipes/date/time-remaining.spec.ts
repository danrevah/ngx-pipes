import { TimeRemainingPipe } from './time-remaining';

describe('TimeRemainingPipe', () => {
  let pipe: TimeRemainingPipe;

  beforeEach(() => {
    pipe = new TimeRemainingPipe();
  });

  it('should not change anything if value is not a number between 0 and 86399', () => {
    expect(pipe.transform(-1)).toEqual(-1);
    expect(pipe.transform(86400)).toEqual(86400);
    expect(pipe.transform('foobar')).toEqual('foobar');
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform(true)).toEqual(true);
    expect(pipe.transform(false)).toEqual(false);
    expect(pipe.transform(NaN)).toEqual(NaN);
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

  it('should return a string in format HH:mm:ss', () => {
    expect(pipe.transform(0)).toEqual('00:00:00');
    expect(pipe.transform(90)).toEqual('00:01:30');
    expect(pipe.transform(3599)).toEqual('00:59:59');
    expect(pipe.transform(86399)).toEqual('23:59:59');
  });
});
