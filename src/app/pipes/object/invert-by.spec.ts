import {InvertByPipe} from './invert-by';

describe('InvertBy Pipe', () => {
  let pipe: InvertByPipe;

  beforeEach(() => {
    pipe = new InvertByPipe();
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
    expect(pipe.transform({foo: 'bar'})).toEqual({bar: ['foo']});
    expect(pipe.transform({foo: 1, bar: 42})).toEqual({1: ['foo'], 42: ['bar']});

    expect(pipe.transform({}, (_: any) => `name_${_}`)).toEqual({});
    expect(pipe.transform({foo: 'bar'}, (_: any) => `name_${_}`)).toEqual({name_bar: ['foo']});
    expect(pipe.transform({foo: 1, bar: 42}, (_: any) => `name_${_}`)).toEqual({name_1: ['foo'], name_42: ['bar']});
  });

  it('should return inverted values / keys subsequent values override previous value', () => {
    expect(pipe.transform({a: 1, b: 2, c: 1})).toEqual({1: ['a', 'c'], 2: ['b']});
    expect(pipe.transform({a: 1, b: 2, c: 1, d: 2, e: 3})).toEqual({1: ['a','c'], 2: ['b','d'], 3: ['e']});

    expect(pipe.transform({a: 1, b: 2, c: 1}, (_: any) => `name_${_}`)).toEqual({name_1: ['a', 'c'], name_2: ['b']});
    expect(pipe.transform({a: 1, b: 2, c: 1, d: 2, e: 3}, (_: any) => `name_${_}`)).toEqual({name_1: ['a','c'], name_2: ['b','d'], name_3: ['e']});
  });
});
