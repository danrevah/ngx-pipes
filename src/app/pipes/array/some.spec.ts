import {SomePipe} from './some';
import {isNumber, isUndefined} from '../helpers/helpers';

describe('SomePipe', () => {
  let pipe: SomePipe;

  beforeEach(() => {
    pipe = new SomePipe();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo', isNumber)).toEqual('foo');
    expect(pipe.transform(null, isNumber)).toEqual(null);
    expect(pipe.transform(undefined, isNumber)).toEqual(undefined);
    expect(pipe.transform(42, isNumber)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2}, isNumber)).toEqual({foo: 1, bar: 2});
  });

  it('should check if some elements of the array fits the predicate', () => {
    expect(pipe.transform([1, 2, 3, 4], isNumber)).toBeTruthy();
    expect(pipe.transform([1, 2, 3, 'a'], isNumber)).toBeTruthy();
    expect(pipe.transform([null, undefined, 'a', {}, []], isNumber)).toBeFalsy();
    expect(pipe.transform([1, 2, 3, 4], isUndefined)).toBeFalsy();
    expect(pipe.transform([undefined, undefined, 1], isUndefined)).toBeTruthy();
    expect(pipe.transform([undefined, undefined], isUndefined)).toBeTruthy();
  });
});
