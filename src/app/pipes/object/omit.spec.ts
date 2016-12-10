import {OmitPipe} from './omit';

describe('OmitPipe', () => {
  let pipe: OmitPipe;

  beforeEach(() => {
    pipe = new OmitPipe();
  });

  it('should keep the element the same way if its not an object', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

  it('should return picked object by args', () => {
    expect(pipe.transform({})).toEqual({});
    expect(pipe.transform({foo: 1})).toEqual({foo: 1});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'a')).toEqual({b: 2, c: 3});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'a', 'b')).toEqual({c: 3});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'b', 'c')).toEqual({a: 1});
    expect(pipe.transform({a: 1, b: 2, c: 3}, 'b')).toEqual({a: 1, c: 3});
  });
});
