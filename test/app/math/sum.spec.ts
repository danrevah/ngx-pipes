import {SumPipe} from "../../../src/app/pipes/math/sum";

describe('SumPipe', () => {
  let pipe: SumPipe;

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('should return sum of element', () => {
    expect(pipe.transform([1, 2, 3, 4])).toEqual(10);
    expect(pipe.transform([5, 4, 3, 2, 1, -2, -3, -4, -5])).toEqual(1);
    expect(pipe.transform([1, 2, 3, 4, 4, 3, 2, 1, -10])).toEqual(10);
  });
});
