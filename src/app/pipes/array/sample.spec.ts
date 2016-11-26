import {SamplePipe} from './sample';

describe('SamplePipe', () => {
  let pipe: SamplePipe;

  beforeEach(() => {
    pipe = new SamplePipe();
  });

  it('should return randomly sampled array', () => {
    expect(pipe.transform([42])).toEqual([42]);
    expect(pipe.transform(['foo'])).toEqual(['foo']);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toEqual(1);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3).length).toEqual(3);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30).length).toEqual(10);
  });
});
