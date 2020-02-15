import { ChunkPipe } from './chunk';

describe('ChunkPipe', () => {
  let pipe: ChunkPipe;

  beforeEach(() => {
    pipe = new ChunkPipe();
  });

  it('should not do anything when not an array or string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({ foo: 1, bar: 2 })).toEqual({ foo: 1, bar: 2 });
  });

  it('should chunk array without size parameter', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array);
    expect(result).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('should chunk array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pipe.transform(array, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should chunk string without size parameter', () => {
    const target = 'abcde';
    const result = pipe.transform(target);
    expect(result).toEqual([['a'], ['b'], ['c'], ['d'], ['e']]);
  });

  it('should chunk string', () => {
    const target = 'abcde';
    const result = pipe.transform(target, 2);
    expect(result).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });
});
