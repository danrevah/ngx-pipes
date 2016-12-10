import {InvertPipe} from './invert';

describe('Invert Pipe', () => {
  let pipe: InvertPipe;

  beforeEach(() => {
    pipe = new InvertPipe();
  });

  it('should keep the element the same way if its not an object', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

  it('should return inverted values / keys object', () => {
    expect(pipe.transform({})).toEqual({});
    expect(pipe.transform({foo: 'bar'})).toEqual({bar: 'foo'});
    expect(pipe.transform({foo: 1, bar: 42})).toEqual({1: 'foo', 42: 'bar'});
    expect(pipe.transform({foo: [1, 2], bar: 42})).toEqual({'1,2': 'foo', 42: 'bar'});
    expect(pipe.transform({foo: {a: 1, b: 2}, bar: 42})).toEqual({'[object Object]': 'foo', 42: 'bar'});
  });

  it('should return inverted values / keys subsequent values override previous value', () => {
    expect(pipe.transform({a: 1, b: 2, c: 1})).toEqual({1: 'c', 2: 'b'});
    expect(pipe.transform({a: 1, b: 2, c: 1, d: 2, e: 3})).toEqual({1: 'c', 2: 'd', 3: 'e'});
  });
});
