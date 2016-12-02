import {SamplePipe} from './sample';

describe('SamplePipe', () => {
  let pipe: SamplePipe;

  beforeEach(() => {
    pipe = new SamplePipe();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should return randomly sampled array', () => {
    expect(pipe.transform([42])).toEqual([42]);
    expect(pipe.transform(['foo'])).toEqual(['foo']);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toEqual(1);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3).length).toEqual(3);
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30).length).toEqual(10);
  });
});
