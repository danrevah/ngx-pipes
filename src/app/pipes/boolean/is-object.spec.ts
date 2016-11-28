import {IsObjectPipe} from "./is-object";

describe('IsObjectPipe', () => {
  let pipe: IsObjectPipe;

  beforeEach(() => {
    pipe = new IsObjectPipe();
  });

  it('should check if of given value is an object', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform({})).toBeTruthy();
    expect(pipe.transform({a: 1, b: 2})).toBeTruthy();
    expect(pipe.transform([])).toBeTruthy();
    expect(pipe.transform([1, 2])).toBeTruthy();
    expect(pipe.transform([{a: 1}, {a: 2}])).toBeTruthy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(false)).toBeFalsy();
    expect(pipe.transform(true)).toBeFalsy();
  });
});
