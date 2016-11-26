import {SomePipe} from './some';
import {isNumber, isUndefined} from '../utils/utils';

describe('SomePipe', () => {
  let pipe: SomePipe;

  beforeEach(() => {
    pipe = new SomePipe();
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
