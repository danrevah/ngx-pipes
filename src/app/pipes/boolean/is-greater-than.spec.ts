import {IsGreaterThanPipe} from "./is-greater-than";

describe('IsGreaterThanPipe', () => {
  let pipe: IsGreaterThanPipe;

  beforeEach(() => {
    pipe = new IsGreaterThanPipe();
  });

  it('should check if of given value is greater than other', () => {
    expect(pipe.transform(1, 1)).toBeFalsy();
    expect(pipe.transform(1, 2)).toBeFalsy();
    expect(pipe.transform(2, 1)).toBeTruthy();
  });
});
