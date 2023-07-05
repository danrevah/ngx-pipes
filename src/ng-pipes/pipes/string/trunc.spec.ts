import {TruncPipe} from './trunc';

describe('TruncPipe', () => {
  let pipe: TruncPipe;
  beforeEach(() => {
    pipe = new TruncPipe();
  });

  it('Should not trunc.', () => {
    const result = pipe.transform("abc");
    expect(result).toEqual("abc");
  });

  it('Should trunc by default args.', () => {
    const result = pipe.transform("1234567890abcdef");
    expect(result).toEqual("1234567890abcde...");
  });

  it('Should trunc by specific args.', () => {
    const result = pipe.transform("1234567890abcdef", 10, '*');
    expect(result).toEqual("1234567890*");
  });
});
