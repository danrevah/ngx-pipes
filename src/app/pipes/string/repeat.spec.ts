import {RepeatPipe} from "./repeat";

describe('RepeatPipe Tests', () => {
  let pipe:RepeatPipe;

  beforeEach(() => {
    pipe = new RepeatPipe();
  });

  it('Should repeat string', () => {
    let result = pipe.transform('foo', 3);
    expect(result).toEqual('foofoofoo');
  });

  it('Should repeat string with separator', () => {
    let result = pipe.transform('foo', 3, '-');
    expect(result).toEqual('foo-foo-foo');
  });

  it('Should return the same value when there are no arguments', () => {
    let result = pipe.transform('foo');
    expect(result).toEqual('foo');
  });

  it('Should throw range exception if times count is below zero', () => {
    expect(() => { pipe.transform('foo', -1) }).toThrow(new RangeError());
  });
});
