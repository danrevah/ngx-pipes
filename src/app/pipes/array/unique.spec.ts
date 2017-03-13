import {UniquePipe} from "./unique";

describe('DiffPipe', () => {
  let pipe: UniquePipe;

  beforeEach(() => {
    pipe = new UniquePipe();
  });

  it('should return value if not array', () => {
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform(false)).toEqual(false);
  });

  it('should keep the array the same way if it doesn\'t have any duplicate elements', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
  });

  it('should returns an array of only unique elements', () => {
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([1, 2, 5, 1, 3, 7, 8, 5, 10])).toEqual([1,2,5,3,7,8,10]);
  });
});
