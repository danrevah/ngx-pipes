import { ReplacePipe } from './replace';

describe('ReplacePipe Tests', () => {
  let pipe: ReplacePipe;

  beforeEach(() => {
    pipe = new ReplacePipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null, '', 'test')).toEqual(null);
    expect(pipe.transform(undefined, '', 'test')).toEqual(undefined);
    expect(pipe.transform(42, '', 'test')).toEqual(42);
    expect(pipe.transform({ name: 'foo' }, '', 'test')).toEqual({ name: 'foo' });
  });

  it('Should replace properly', () => {
    expect(pipe.transform('foo foo bar', 'foo', 'test', 'g')).toEqual('test test bar');
    expect(pipe.transform('foo foo bar', 'foo', 'test', 'i')).toEqual('test foo bar');
    expect(pipe.transform('+1-(444)-555-1234', '\\d', 'x', 'g')).toEqual('+x-(xxx)-xxx-xxxx');
    expect(pipe.transform('+1-(444)-555-1234', '\\d', 'x')).toEqual('+x-(444)-555-1234');
    expect(pipe.transform('she sells seashells', '^\\w+', 'He', 'g')).toEqual('He sells seashells');
  });
});
