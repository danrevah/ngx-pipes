import {RoundPipe} from "./round";

describe('RoundPipe', () => {
  let pipe: RoundPipe;

  beforeEach(() => {
    pipe = new RoundPipe();
  });

  it('should return rounded number of given number', () => {
    expect(pipe.transform(1.2)).toEqual(1);
    expect(pipe.transform(1.5)).toEqual(2);
    expect(pipe.transform(42.42)).toEqual(42);
    expect(pipe.transform(1.35, 1)).toEqual(1.4);
    expect(pipe.transform(1.3557, 2)).toEqual(1.36);
    expect(pipe.transform(1.3547, 2)).toEqual(1.35);
  });
});
