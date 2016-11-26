import {IsLessEqualThanPipe} from "./is-less-equal-than";

describe('IsLessEqualThanPipe', () => {
  let pipe: IsLessEqualThanPipe;

  beforeEach(() => {
    pipe = new IsLessEqualThanPipe();
  });

  it('should check if of given value is less or equal than other', () => {
    expect(pipe.transform(1, 1)).toBeTruthy();
    expect(pipe.transform(1, 2)).toBeTruthy();
    expect(pipe.transform(2, 1)).toBeFalsy();
  });
});
