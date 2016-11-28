import {IsArrayPipe} from "./is-array";

describe('IsArrayPipe', () => {
  let pipe: IsArrayPipe;

  beforeEach(() => {
    pipe = new IsArrayPipe();
  });

  it('should check if of given value is an array', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform([])).toBeTruthy();
    expect(pipe.transform([1, 2])).toBeTruthy();
    expect(pipe.transform([{a: 1}, {a: 2}])).toBeTruthy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(false)).toBeFalsy();
    expect(pipe.transform(true)).toBeFalsy();
  });
});
