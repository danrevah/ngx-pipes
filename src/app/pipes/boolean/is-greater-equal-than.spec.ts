import {IsGreaterEqualThanPipe} from "./is-greater-equal-than";

describe('IsGreaterEqualThanPipe', () => {
  let pipe: IsGreaterEqualThanPipe;

  beforeEach(() => {
    pipe = new IsGreaterEqualThanPipe();
  });

  it('should check if of given value is greater than other', () => {
    expect(pipe.transform(1, 1)).toBeTruthy();
    expect(pipe.transform(1, 2)).toBeFalsy();
    expect(pipe.transform(2, 1)).toBeTruthy();
  });
});
