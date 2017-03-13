import {EveryPipe} from './every';
import {isUndefined, isNumber} from '../helpers/helpers';

describe('EveryPipe', () => {
  let pipe: EveryPipe;

  beforeEach(() => {
    pipe = new EveryPipe();
  });

  it('should check if every elements of the array fits the predicate', () => {
    expect(pipe.transform(42, isNumber)).toBeFalsy();
    expect(pipe.transform([1, 2, 3, 4], isNumber)).toBeTruthy();
    expect(pipe.transform([1, 2, 3, 'a'], isNumber)).toBeFalsy();
    expect(pipe.transform([1, 2, 3, 4], isUndefined)).toBeFalsy();
    expect(pipe.transform([undefined, undefined, 1], isUndefined)).toBeFalsy();
    expect(pipe.transform([undefined, undefined], isUndefined)).toBeTruthy();
  });
});
