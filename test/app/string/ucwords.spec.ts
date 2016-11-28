import {UcWordsPipe} from "../../../src/app/pipes/string/ucwords";

describe('UcFirstPipe Tests', () => {
  let pipe:UcWordsPipe;

  beforeEach(() => {
    pipe = new UcWordsPipe();
  });

  it('Should capitalize all words in a string', () => {
    let result = pipe.transform('foo bar baz');
    expect(result).toEqual('Foo Bar Baz');
  });

  it('Should test mixed strings capitalize behaviour', () => {
    let result = pipe.transform('foo bar baz $a $b $c some string to test');
    expect(result).toEqual('Foo Bar Baz $a $b $c Some String To Test');
  });
});
