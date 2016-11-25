import {IsStringPipe} from "./is-string";

describe('IsStringPipe', () => {
  let pipe: IsStringPipe;

  beforeEach(() => {
    pipe = new IsStringPipe();
  });

  it('should check if of given value is a string', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeTruthy();
    expect(pipe.transform('str')).toBeTruthy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(false)).toBeFalsy();
    expect(pipe.transform(true)).toBeFalsy();
  });
});
