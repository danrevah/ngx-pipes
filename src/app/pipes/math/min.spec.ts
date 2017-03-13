import {MinPipe} from "./min";

describe('MinPipe', () => {
  let pipe: MinPipe;

  beforeEach(() => {
    pipe = new MinPipe();
  });

  it('should return min element from array', () => {
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform([1, 2, 3])).toEqual(1);
    expect(pipe.transform([5, 4, 3, 2, 1, 2, 3, 4, 5])).toEqual(1);
    expect(pipe.transform([5, 4, 3, 2, 1, 2, 3, 4, -5])).toEqual(-5);
  });
});
