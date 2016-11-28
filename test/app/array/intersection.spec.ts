import {IntersectionPipe} from '../../../src/app/pipes/array/intersection';

describe('IntersectionPipe', () => {
  let pipe: IntersectionPipe;

  beforeEach(() => {
    pipe = new IntersectionPipe();
  });

  it('should not change when calling pipe without arguments', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return empty array if there are no elements in the intersection', () => {
    expect(pipe.transform([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(pipe.transform([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([]);
  });

  it('should return intersection of arrays', () => {
    expect(pipe.transform([1, 2, 3], [1, 2 ,3, 4, 5, 6])).toEqual([1,2,3]);
    expect(pipe.transform([1, 2, 3], [1, 2, 4, 5, 6], [1, 2, 7, 8, 9])).toEqual([1, 2]);
  });
});
