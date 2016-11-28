import {IsLessThanPipe} from "./is-less-than";

describe('IsLessThanPipe', () => {
  let pipe: IsLessThanPipe;

  beforeEach(() => {
    pipe = new IsLessThanPipe();
  });

  it('should check if of given value is less than other', () => {
    expect(pipe.transform(1, 1)).toBeFalsy();
    expect(pipe.transform(1, 2)).toBeTruthy();
    expect(pipe.transform(2, 1)).toBeFalsy();
  });
});
