import {IsNumberPipe} from "./is-number";

describe('IsNumberPipe', () => {
  let pipe: IsNumberPipe;

  beforeEach(() => {
    pipe = new IsNumberPipe();
  });

  it('should check if of given value is a number', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(1)).toBeTruthy();
    expect(pipe.transform(1e3)).toBeTruthy();
    expect(pipe.transform(0.42)).toBeTruthy();
    expect(pipe.transform(42)).toBeTruthy();
    expect(pipe.transform(-42)).toBeTruthy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(false)).toBeFalsy();
    expect(pipe.transform(true)).toBeFalsy();
  });
});
