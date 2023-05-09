import { TakePipe } from './take';

describe('TakePipe', () => {
  let pipe: TakePipe;

  beforeEach(() => {
    pipe = new TakePipe();
  });

  it('should not do anything when not an array or string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({ foo: 1, bar: 2 })).toEqual({ foo: 1, bar: 2 });
  });

  it('should return a slice of array from start for a given count', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 'start', 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return a slice of array from end for a given count', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 'end', 2);
    expect(result).toEqual([4, 5]);
  });

  it('should return a slice of a string from start for a given count', () => {
    const str = 'Angular is awesome!';
    const result = pipe.transform(str, 'start', 7);
    expect(result).toEqual('Angular');
  });

  it('should return a slice of a string from end for a given count', () => {
    const str = 'Angular is awesome!';
    const result = pipe.transform(str, 'end', 8);
    expect(result).toEqual('awesome!');
  });

  it('should not modify original array', () => {
    const target = [1, 2, 3];
    pipe.transform(target);
    expect(target).toEqual([1, 2, 3]);
  });

  it('should return the array as-is if the count is greater than the array length', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 'start', 10);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return a slice of an array from start even for a negative value of count', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 'start', -2);
    expect(result).toEqual([1, 2]);
  });

  it('should return a slice of a string from start even for a negative value of count', () => {
    const str = 'Angular is awesome!';
    const result = pipe.transform(str, 'start', -2);
    expect(result).toEqual('An');
  });

  it('should return only the first element in the array with default parameters', () => {
    const array = ['Angular', 'is', 'awesome', '!'];
    const result = pipe.transform(array);
    expect(result).toEqual(['Angular']);
  });

  it('should return an empty array for a count of 0 and a `from` value of tart', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 'start', 0);
    expect(result).toEqual([]);
  });

  it('should return an empty array for a count of 0 and a `from` value of end', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 'end', 0);
    expect(result).toEqual([]);
  });
});
