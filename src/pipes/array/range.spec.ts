import { RangePipe } from './range';

describe('RangePipe', () => {
  let pipe: RangePipe;

  beforeEach(() => {
    pipe = new RangePipe();
  });

  it('should keep the empty array way if it doesn\'t have some of the arguments', () => {
    expect(pipe.transform()).toEqual([]);

    expect(pipe.transform(0)).toEqual([]);
    expect(pipe.transform(1)).toEqual([]);

    expect(pipe.transform(0, 0)).toEqual([]);
  });

  it('should return a new array with the length of the second argument', () => {
    expect(pipe.transform(0, 0).length).toEqual(0);
    expect(pipe.transform(0, 1000).length).toEqual(1000);
    expect(pipe.transform(1, 5).length).toEqual(5);

    expect(pipe.transform(0, 0, 0).length).toEqual(0);
    expect(pipe.transform(0, 0, 2).length).toEqual(0);
    expect(pipe.transform(1, 5, 0).length).toEqual(5);
    expect(pipe.transform(1, 5, 2).length).toEqual(5);
  });

  it('should return a new array filled', () => {
    expect(pipe.transform(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(pipe.transform(1, 5)).toEqual([1, 2, 3, 4, 5]);

    expect(pipe.transform(1, 5, 0)).toEqual([1, 1, 1, 1, 1]);
    expect(pipe.transform(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(pipe.transform(1, 5, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(pipe.transform(2, 5, 2)).toEqual([2, 4, 6, 8, 10]);
  });

  it('should return a new array filled with only negatives', () => {
    expect(pipe.transform(0, 5, -1)).toEqual([0, -1, -2, -3, -4]);
    expect(pipe.transform(-1, 5, -2)).toEqual([-1, -3, -5, -7, -9]);
    expect(pipe.transform(-2, 5, -2)).toEqual([-2, -4, -6, -8, -10]);
  });

  it('should return a new array filled with range from -5 to +5', () => {
    expect(pipe.transform(-5, 11)).toEqual([-5, -4, -3, - 2, -1, 0, 1, 2, 3, 4, 5]);
    expect(pipe.transform(-5, 11, 1)).toEqual([-5, -4, -3, - 2, -1, 0, 1, 2, 3, 4, 5]);
  });

});
