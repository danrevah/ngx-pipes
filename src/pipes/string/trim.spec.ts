import { TrimPipe } from './trim';

describe('TrimPipe Tests', () => {
  let pipe: TrimPipe;

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it('Should trim whitespace from string', () => {
    const result = pipe.transform('   foo bar   ');
    expect(result).toEqual('foo bar');
  });

  it('Should trim other characters from string', () => {
    const result = pipe.transform('42foo bar4242', '42');
    expect(result).toEqual('foo bar');
  });
});
