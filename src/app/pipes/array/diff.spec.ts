import {DiffPipe} from './diff';

describe('DiffPipe', () => {
  let pipe: DiffPipe;

  beforeEach(() => {
    pipe = new DiffPipe();
  });

  it('should return the input if not an array', () => {
    expect(pipe.transform(true)).toEqual(true);
    expect(pipe.transform(42)).toEqual(42);
  });

  it('should keep the array the same way if it doesn\'t have any without arguments', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
  });

  it('should returns an array of diff between arrays', () => {
    expect(pipe.transform([2, 3], [])).toEqual([2, 3]);
    expect(pipe.transform([], [2, 3])).toEqual([]);
    expect(pipe.transform([1, 2, 3], [2, 3])).toEqual([1]);
    expect(pipe.transform([1, 2, 3], [1, 4], [2, 5])).toEqual([3]);
  });
});
