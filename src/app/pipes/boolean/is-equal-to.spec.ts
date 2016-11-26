import {IsEqualToPipe} from "./is-equal-to";

describe('IsEqualToPipe', () => {
  let pipe: IsEqualToPipe;

  beforeEach(() => {
    pipe = new IsEqualToPipe();
  });

  it('should check if of given value is equal to other', () => {
    expect(pipe.transform(1, 1)).toBeTruthy();
    expect(pipe.transform(1, '1')).toBeTruthy();
    expect(pipe.transform(1, 2)).toBeFalsy();
    expect(pipe.transform(2, 1)).toBeFalsy();
  });
});
