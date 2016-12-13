import {TestPipe} from './test';

describe('TestPipe Tests', () => {
  let pipe:TestPipe;

  beforeEach(() => {
    pipe = new TestPipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null, '')).toEqual(null);
    expect(pipe.transform(undefined, '')).toEqual(undefined);
    expect(pipe.transform(42, '')).toEqual(42);
    expect(pipe.transform({name: 'foo'}, '')).toEqual({name: 'foo'});
  });

  it('Should camelize properly', () => {
    expect(pipe.transform('foo 42', '[\\d]+$', 'g')).toBeTruthy();
    expect(pipe.transform('42 foo', '[\\d]+$', 'g')).toBeFalsy();
    expect(pipe.transform('foo', '[\\d]+$', 'g')).toBeFalsy();
    expect(pipe.transform('FOO', '^foo')).toBeFalsy();
    expect(pipe.transform('FOO', '^foo', 'i')).toBeTruthy();
  });
});
