import {IsNotEqualToPipe} from "../../../src/app/pipes/boolean/is-not-equal-to";

describe('IsNotEqualToPipe', () => {
  let pipe: IsNotEqualToPipe;

  beforeEach(() => {
    pipe = new IsNotEqualToPipe();
  });

  it('should check if of given value is not equal to other', () => {
    expect(pipe.transform(1, 1)).toBeFalsy();
    expect(pipe.transform(1, '1')).toBeFalsy();
    expect(pipe.transform(1, 2)).toBeTruthy();
    expect(pipe.transform(2, 1)).toBeTruthy();
  });
});
