import {AveragePipe} from './average';

describe('AveragePipe', () => {
  let pipe: AveragePipe;

  beforeEach(() => {
    pipe = new AveragePipe();
  });

  it('should not do anything if array contain anything else than numbers', () => {
    expect(pipe.transform([Infinity])).toEqual(NaN);
    expect(pipe.transform([1, 2, Infinity])).toEqual(NaN);
  });

  it('should return average of numbers', () => {
    expect(pipe.transform([10, 20, 30])).toEqual(20);
    expect(pipe.transform([1, 2, 3])).toEqual(2);
    expect(pipe.transform([1, 2])).toEqual(1.5);
    expect(pipe.transform([1])).toEqual(1);
    expect(pipe.transform([])).toEqual(0);
  });
});
