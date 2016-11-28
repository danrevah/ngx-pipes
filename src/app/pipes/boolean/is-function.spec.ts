import {IsFunctionPipe} from "./is-function";

describe('IsFunctionPipe', () => {
  let pipe: IsFunctionPipe;

  beforeEach(() => {
    pipe = new IsFunctionPipe();
  });

  it('should check if of given value is a function', () => {
    expect(pipe.transform(null)).toBeFalsy();
    expect(pipe.transform(undefined)).toBeFalsy();
    expect(pipe.transform(1)).toBeFalsy();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform(() => {})).toBeTruthy();
    expect(pipe.transform(function() {})).toBeTruthy();
  });
});
