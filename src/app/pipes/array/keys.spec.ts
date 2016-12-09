import {KeysPipe} from './keys';

describe('Keys Pipe', () => {
  let pipe: KeysPipe;

  beforeEach(() => {
    pipe = new KeysPipe();
  });

  it('should keep the element the same way if its not an object', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
  });

  it('should return array of keys', () => {
    expect(pipe.transform({})).toEqual([]);
    expect(pipe.transform({foo: 'bar'})).toEqual(['foo']);
    expect(pipe.transform({foo: 1, bar: 42})).toEqual(['foo', 'bar']);
  });
});
