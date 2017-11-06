import {ShortScaleNumberPipe} from "./short-scale-number";

describe('ShortScaleNumberPipe', () => {
  let pipe: ShortScaleNumberPipe;

  beforeEach(() => {
    pipe = new ShortScaleNumberPipe();
  });

  it('should return scale number from number', () => {
    expect(pipe.transform(1600)).toEqual(1.6 + 'K');
    expect(pipe.transform(999)).toEqual(999);
    expect(pipe.transform(2100)).toEqual(2.1 + 'K');
    expect(pipe.transform(8600000)).toEqual(8.6 + 'M');
    expect(pipe.transform(1500600000)).toEqual(1.5 + 'B');
    expect(pipe.transform(1100000000000)).toEqual(1.1 + 'T');
  });
});
