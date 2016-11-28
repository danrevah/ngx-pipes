import {UnionPipe} from "./union";

describe('UnionPipe', () => {
  let pipe: UnionPipe;

  beforeEach(() => {
    pipe = new UnionPipe();
  });

  it('should check if array is not changed when calling pipe without arguments', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should union two arrays without duplicate values', () => {
    expect(pipe.transform([1, 2, 3], [[4, 5, 6]])).toEqual([1,2,3,4,5,6]);
  });

  it('should union two arrays with duplicate values, and remove the intersection', () => {
    expect(pipe.transform([1, 2, 3], [[1, 2, 3]])).toEqual([1,2,3]);
    expect(pipe.transform([1, 2, 3, 4], [[1, 2, 3]])).toEqual([1,2,3,4]);
    expect(pipe.transform([1, 2, 3, 4], [[1, 2, 3, 5]])).toEqual([1,2,3,4,5]);
    expect(pipe.transform([1, 2, 3], [[1, 2, 3, 4, 5 ,6]])).toEqual([1,2,3,4,5,6]);
  });
  it('should union multiple arrays with duplicate values, and remove the intersection', () => {
    expect(pipe.transform([1, 2, 3], [[1, 2, 3], [4, 5, 6]])).toEqual([1,2,3,4,5,6]);
    expect(pipe.transform([1, 2, 3, 4], [[1, 2, 3], [5, 6]])).toEqual([1,2,3,4,5,6]);
    expect(pipe.transform([1, 2, 3, 4], [[1, 2, 3, 5], [5, 6]])).toEqual([1,2,3,4,5,6]);
  });
});
