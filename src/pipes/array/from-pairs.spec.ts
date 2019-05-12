import { FromPairsPipe } from './from-pairs';

describe('FromPairsPipe', () => {
  let pipe: FromPairsPipe;

  beforeEach(() => {
    pipe = new FromPairsPipe();
  });

  it('should not do anything with non-arrays', () => {
    expect(pipe.transform(42)).toBe(42);
    expect(pipe.transform('foo')).toBe('foo');
    expect(pipe.transform(undefined)).toBe(undefined);
  });

  it('should transform array to object', () => {
    expect(pipe.transform([['foo', 42]])).toEqual({ foo: 42 });
    expect(pipe.transform([['foo', 42], ['bar', 'foobar']])).toEqual({ foo: 42, bar: 'foobar' });
  });

  it('should ignore non-array elements', () => {
    expect(pipe.transform([['foo', 42], 1, ['bar', null], 'baz'])).toEqual({ foo: 42, bar: null });
  });
});
