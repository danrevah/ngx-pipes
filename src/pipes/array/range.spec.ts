import { RangePipe } from './range';

describe('RangePipe', () => {
  let pipe: RangePipe;

  beforeEach(() => {
    pipe = new RangePipe();
  });

  it('should return the input if not an array', () => {
    expect(pipe.transform(true)).toEqual(true);
    expect(pipe.transform(10)).toEqual(10);
  });

  it('should keep the array the same way if it doesn\'t have any without arguments', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
  });

  it('should returns a new array filled', () => {
    expect(pipe.transform([], 0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(pipe.transform([], 1, 5)).toEqual([1, 2, 3, 4, 5]);

    expect(pipe.transform([], 1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(pipe.transform([], 1, 5, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(pipe.transform([], 2, 5, 2)).toEqual([2, 4, 6, 8, 10]);

    expect(pipe.transform([8, 9], 0, 5)).toEqual([8, 9, 0, 1, 2, 3, 4]);
    expect(pipe.transform([8, 9], 1, 5)).toEqual([8, 9, 1, 2, 3, 4, 5]);
  });

});
