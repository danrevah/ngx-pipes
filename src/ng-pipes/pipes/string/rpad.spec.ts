import { RightPadPipe } from './rpad';

describe('RightPadPipe Tests', () => {
  let pipe: RightPadPipe;

  beforeEach(() => {
    pipe = new RightPadPipe();
  });

  it('Should right pad with 2 blanks', () => {
    const result = pipe.transform('foo', 5);
    expect(result).toEqual('foo  ');
  });

  it('Should right pad a number casted to string with 5 zeros', () => {
    const result = pipe.transform(String(2), 6, '0');
    expect(result).toEqual('200000');
  });

  it('Should not add padding if sting length is the same as length', () => {
    const result = pipe.transform('foo', 3);
    expect(result).toEqual('foo');
  });

  it('Should not add padding if sting length is greater than length', () => {
    const result = pipe.transform('foofoo', 3);
    expect(result).toEqual('foofoo');
  });
});
