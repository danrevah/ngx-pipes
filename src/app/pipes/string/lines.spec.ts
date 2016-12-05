import {LinesPipe} from './lines';

describe('LinesPipe Tests', () => {
  let pipe:LinesPipe;

  beforeEach(() => {
    pipe = new LinesPipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({name: 'foo'})).toEqual({name: 'foo'});
  });

  it('Should extract lines properly', () => {
    expect(pipe.transform('foo\r\n')).toEqual(['foo', '']);
    expect(pipe.transform('foo\nbar')).toEqual(['foo', 'bar']);
    expect(pipe.transform('foo\r\nbar\nbaz')).toEqual(['foo','bar','baz']);
    expect(pipe.transform('Some\nSentence\r\nwith\r\nNew line')).toEqual(['Some', 'Sentence', 'with', 'New line']);
  });
});
