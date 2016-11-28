import {IsUndefinedPipe} from "./is-undefined";

describe('IsUndefinedPipe', () => {
  let pipe: IsUndefinedPipe;

  beforeEach(() => {
    pipe = new IsUndefinedPipe();
  });

  it('should check if of given value is null', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform(undefined)).toBeTruthy();
    expect(pipe.transform(false)).toBeFalsy();
    expect(pipe.transform(true)).toBeFalsy();
  });
});
