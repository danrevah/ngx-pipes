import { LeftPadPipe } from './lpad';

describe('LeftPadPipe Tests', () => {
  let pipe: LeftPadPipe;

  beforeEach(() => {
    pipe = new LeftPadPipe();
  });

  it('Should left pad with 2 blanks', () => {
    const result = pipe.transform('foo', 5);
    expect(result).toEqual('  foo');
  });

  it('Should left pad a number casted to string with 5 zeros', () => {
    const result = pipe.transform(String(2), 6, '0');
    expect(result).toEqual('000002');
  });

  it('Should not add padding', () => {
    const result = pipe.transform('foo', 3);
    expect(result).toEqual('foo');
  });

  it('Should not add padding', () => {
    const result = pipe.transform('foofoo', 3);
    expect(result).toEqual('foofoo');
  });

});
