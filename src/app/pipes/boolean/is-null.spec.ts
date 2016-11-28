import {IsNullPipe} from "./is-null";

describe('IsNullPipe', () => {
  let pipe: IsNullPipe;

  beforeEach(() => {
    pipe = new IsNullPipe();
  });

  it('should check if of given value is null', () => {
    expect(pipe.transform(null)).toBeTruthy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(false)).toBeFalsy();
    expect(pipe.transform(true)).toBeFalsy();
  });
});
