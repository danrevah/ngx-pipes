import {UcFirstPipe} from "./ucfirst";

describe('UcFirstPipe Tests', () => {
  let pipe:UcFirstPipe;

  beforeEach(() => {
    pipe = new UcFirstPipe();
  });

  it('Should capitalize first word in a string', () => {
    let result = pipe.transform('foo bar baz');
    expect(result).toEqual('Foo bar baz');
  });

  it('Should capitalize first word in a string, and keep other capitalized letters.', () => {
    let result = pipe.transform('foo BAR BaZ');
    expect(result).toEqual('Foo BAR BaZ');
  });
});
