import {RightTrimPipe} from './rtrim';

describe('RightTrimPipe Tests', () => {
  let pipe:RightTrimPipe;

  beforeEach(() => {
    pipe = new RightTrimPipe();
  });

  it('Should right trim whitespace from string', () => {
    let result = pipe.transform('   foo bar   ');
    expect(result).toEqual('   foo bar');
  });

  it('Should right trim other characters from string', () => {
    let result = pipe.transform('42foo bar42', '42');
    expect(result).toEqual('42foo bar');
  });
});
