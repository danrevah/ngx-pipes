import {PowerPipe} from "./pow";

describe('PowerPipe', () => {
  let pipe: PowerPipe;

  beforeEach(() => {
    pipe = new PowerPipe();
  });

  it('should return value if not a number', () => {
    expect(pipe.transform({a: 1})).toEqual({a: 1});
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it('should return power of a given number', () => {
    expect(pipe.transform(3)).toEqual(9);
    expect(pipe.transform(3, 3)).toEqual(27);
    expect(pipe.transform(9)).toEqual(81);
    expect(pipe.transform(9, 4)).toEqual(6561);
  });
});
