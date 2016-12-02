import {BytesPipe} from './bytes';

describe('BytesPipe', () => {
  let pipe: BytesPipe;

  beforeEach(() => {
    pipe = new BytesPipe();
  });

  it('should not do anything if infinity', () => {
    expect(pipe.transform(Infinity)).toEqual(NaN);
  });

  it('should return correct bytes format', () => {
    expect(pipe.transform(98)).toEqual('98 B');
    expect(pipe.transform(999)).toEqual('999 B');
    expect(pipe.transform(1000)).toEqual('1 KB');
    expect(pipe.transform(1e4)).toEqual('10 KB');
    expect(pipe.transform(1e6 - 1)).toEqual('999.999 KB');
    expect(pipe.transform(1e9 - 1)).toEqual('999.999999 MB');
    expect(pipe.transform(1e9)).toEqual('1 GB');
    expect(pipe.transform(1e12)).toEqual('1000 GB');
  });
});
