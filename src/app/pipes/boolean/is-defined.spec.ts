import {IsDefinedPipe} from "./is-defined";

describe('IsDefinedPipe', () => {
  let pipe: IsDefinedPipe;

  beforeEach(() => {
    pipe = new IsDefinedPipe();
  });

  it('should check if of given value is null', () => {
    expect(pipe.transform(null)).toBeTruthy();
    expect(pipe.transform(1)).toBeTruthy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(false)).toBeTruthy();
    expect(pipe.transform(true)).toBeTruthy();
  });
});
