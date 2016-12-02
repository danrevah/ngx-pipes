import {ShufflePipe} from './shuffle';

describe('ShufflePipe', () => {
  let pipe: ShufflePipe;

  beforeEach(() => {
    pipe = new ShufflePipe();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should return shuffled array', () => {
    expect(pipe.transform([42])).toEqual([42]);
    expect(pipe.transform(['foo'])).toEqual(['foo']);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toEqual(10);
  });
});
