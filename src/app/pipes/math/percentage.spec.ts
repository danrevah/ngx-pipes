import {PercentagePipe} from './percentage';

describe('PercentagePipe', () => {
  let pipe: PercentagePipe;

  beforeEach(() => {
    pipe = new PercentagePipe();
  });

  it('should not change anything if not a number', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should return percent between numbers', () => {
    expect(pipe.transform(5)).toEqual(5);
    expect(pipe.transform(5, 160)).toEqual(3.125);
    expect(pipe.transform(5, 160, true)).toEqual(3);
  });
});
