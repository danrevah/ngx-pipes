import {CeilPipe} from "./ceil";

describe('CeilPipe', () => {
  let pipe: CeilPipe;

  beforeEach(() => {
    pipe = new CeilPipe();
  });

  it('should return ceil of given number', () => {
    expect(pipe.transform(1.2345)).toEqual(2);
    expect(pipe.transform(42.123)).toEqual(43);
    expect(pipe.transform(42.123, 1)).toEqual(42.2);
    expect(pipe.transform(42.4242, 2)).toEqual(42.43);
    expect(pipe.transform(42, -1)).toEqual(42);
  });
});
