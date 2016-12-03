import {SomePipe} from './some';
import GeneralHelper from '../helpers/helpers';

describe('SomePipe', () => {
  let pipe: SomePipe;

  beforeEach(() => {
    pipe = new SomePipe();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo', GeneralHelper.isNumber)).toEqual('foo');
    expect(pipe.transform(null, GeneralHelper.isNumber)).toEqual(null);
    expect(pipe.transform(undefined, GeneralHelper.isNumber)).toEqual(undefined);
    expect(pipe.transform(42, GeneralHelper.isNumber)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2}, GeneralHelper.isNumber)).toEqual({foo: 1, bar: 2});
  });

  it('should check if some elements of the array fits the predicate', () => {
    expect(pipe.transform([1, 2, 3, 4], GeneralHelper.isNumber)).toBeTruthy();
    expect(pipe.transform([1, 2, 3, 'a'], GeneralHelper.isNumber)).toBeTruthy();
    expect(pipe.transform([null, undefined, 'a', {}, []], GeneralHelper.isNumber)).toBeFalsy();
    expect(pipe.transform([1, 2, 3, 4], GeneralHelper.isUndefined)).toBeFalsy();
    expect(pipe.transform([undefined, undefined, 1], GeneralHelper.isUndefined)).toBeTruthy();
    expect(pipe.transform([undefined, undefined], GeneralHelper.isUndefined)).toBeTruthy();
  });
});
