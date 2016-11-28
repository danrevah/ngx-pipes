import {ShufflePipe} from '../../../src/app/pipes/array/shuffle';

describe('ShufflePipe', () => {
  let pipe: ShufflePipe;

  beforeEach(() => {
    pipe = new ShufflePipe();
  });

  it('should return shuffled array', () => {
    expect(pipe.transform([42])).toEqual([42]);
    expect(pipe.transform(['foo'])).toEqual(['foo']);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toEqual(10);
  });
});
