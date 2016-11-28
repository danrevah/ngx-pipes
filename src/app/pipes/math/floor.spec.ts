import {FloorPipe} from "./floor";

describe('FloorPipe', () => {
  let pipe: FloorPipe;

  beforeEach(() => {
    pipe = new FloorPipe();
  });

  it('should return floor of given number', () => {
    expect(pipe.transform(1.2345)).toEqual(1);
    expect(pipe.transform(1.2345)).toEqual(1);
    expect(pipe.transform(42.123)).toEqual(42);
    expect(pipe.transform(42.123, 1)).toEqual(42.1);
    expect(pipe.transform(42.4242, 2)).toEqual(42.42);
    expect(pipe.transform(42, -1)).toEqual(42);
  });
});
