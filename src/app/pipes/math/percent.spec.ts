import {PercentPipe} from "./percent";

describe('PercentPipe', () => {
  let pipe: PercentPipe;

  beforeEach(() => {
    pipe = new PercentPipe();
  });

  it('should return percent between numbers', () => {
    expect(pipe.transform(5)).toEqual(5);
    expect(pipe.transform(5, 160)).toEqual(3.125);
    expect(pipe.transform(5, 160, true)).toEqual(3);
  });
});
