import {RangePipe} from "./range";

describe('RangePipe', () => {
  let pipe: RangePipe;

  beforeEach(() => {
    pipe = new RangePipe();
  });

  it('should get array range from pipe', () => {
    expect(pipe.transform(0)).toEqual([]);
    expect(pipe.transform(3)).toEqual([0,1,2]);
    expect(pipe.transform(5)).toEqual([0,1,2,3,4]);
    expect(pipe.transform(10)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it('should get array range from pipe with different steps', () => {
    expect(pipe.transform(3, [2])).toEqual([0,2]);
    expect(pipe.transform(5, [3])).toEqual([0,3]);
    expect(pipe.transform(10, [2])).toEqual([0,2,4,6,8]);
  });
});
