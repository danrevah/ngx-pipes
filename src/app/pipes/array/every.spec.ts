import {EveryPipe} from './every';
import GeneralHelper from '../helpers/helpers';

describe('EveryPipe', () => {
  let pipe: EveryPipe;

  beforeEach(() => {
    pipe = new EveryPipe();
  });

  it('should check if every elements of the array fits the predicate', () => {
    expect(pipe.transform([1, 2, 3, 4], GeneralHelper.isNumber)).toBeTruthy();
    expect(pipe.transform([1, 2, 3, 'a'], GeneralHelper.isNumber)).toBeFalsy();
    expect(pipe.transform([1, 2, 3, 4], GeneralHelper.isUndefined)).toBeFalsy();
    expect(pipe.transform([undefined, undefined, 1], GeneralHelper.isUndefined)).toBeFalsy();
    expect(pipe.transform([undefined, undefined], GeneralHelper.isUndefined)).toBeTruthy();
  });
});
