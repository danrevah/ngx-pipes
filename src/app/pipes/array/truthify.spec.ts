import {TrurthifyPipe} from "./truthify";

describe('TrurthifyPipe', () => {
  let pipe: TrurthifyPipe;

  beforeEach(() => {
    pipe = new TrurthifyPipe();
  });

  it('should not change array without falsy values', () => {
    expect(pipe.transform([1,2,3])).toEqual([1, 2, 3]);
  });

  it('should check if is `truthifying` array properly', () => {
    expect(pipe.transform([null, 1, false, undefined, 2, 0, 3, NaN, 4, ''])).toEqual([1, 2, 3, 4]);
  });
});
