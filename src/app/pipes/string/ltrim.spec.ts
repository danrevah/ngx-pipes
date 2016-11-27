import {LeftTrimPipe} from './ltrim';

describe('LeftTrimPipe Tests', () => {
  let pipe:LeftTrimPipe;

  beforeEach(() => {
    pipe = new LeftTrimPipe();
  });

  it('Should left trim whitespace from string', () => {
    let result = pipe.transform('   foo bar   ');
    expect(result).toEqual('foo bar   ');
  });

  it('Should left trim other characters from string', () => {
    let result = pipe.transform('42foo bar42', '42');
    expect(result).toEqual('foo bar42');
  });
});
