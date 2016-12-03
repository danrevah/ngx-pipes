import {ShortenPipe} from './shorten';

describe('ShortenPipe Tests', () => {
  let pipe:ShortenPipe;

  beforeEach(() => {
    pipe = new ShortenPipe();
  });

  it('should not do anything when not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should not change the string if the length is more than the string size', () => {
    expect(pipe.transform('lorem ipsum', 20)).toEqual('lorem ipsum');
    expect(pipe.transform('lorem ipsum', 20, '..')).toEqual('lorem ipsum');
  });

  it('should shorten the string', () => {
    expect(pipe.transform('lorem ipsum', 5)).toEqual('lorem');
    expect(pipe.transform('lorem ipsum', 7)).toEqual('lorem i');
  });

  it('should shorten the string with suffix', () => {
    expect(pipe.transform('lorem ipsum', 5, '...')).toEqual('lorem...');
    expect(pipe.transform('lorem ipsum', 6, 'abc')).toEqual('lorem abc');
  });

  it('should shorten the string without word breaking', () => {
    expect(pipe.transform('lorem ipsum', 4, '...', false)).toEqual('lorem...');
    expect(pipe.transform('lorem ipsum', 2, '...', false)).toEqual('lorem...');
    expect(pipe.transform('lorem ipsum', 7, '...', false)).toEqual('lorem ipsum');
  });
});
