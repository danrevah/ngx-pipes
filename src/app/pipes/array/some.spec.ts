import {SomePipe} from './some';
import GeneralHelper from '../helpers/helpers';

describe('SomePipe', () => {
  let pipe: SomePipe;

  beforeEach(() => {
    pipe = new SomePipe();
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
