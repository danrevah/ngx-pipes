import {PluckPipe} from '../../../src/app/pipes/array/pluck';

describe('PluckPipe', () => {
  let pipe: PluckPipe;

  beforeEach(() => {
    pipe = new PluckPipe();
  });

  it('should return only the properties of the array of object', () => {
    const arr = [{foo: 'bar', a: 1, b: {c: 4}},{foo: 'bar2', a: 2, b: {c: 5}}, {foo: 'bar3', a: 3, b: {c: 6}}];
    expect(pipe.transform(arr, 'a')).toEqual([1, 2, 3]);
    expect(pipe.transform(arr, 'foo')).toEqual(['bar', 'bar2', 'bar3']);
    expect(pipe.transform(arr, 'foo.d')).toEqual([undefined, undefined, undefined]);
    expect(pipe.transform(arr, 'b.c')).toEqual([4, 5, 6]);
    expect(pipe.transform(arr, 'b.c.')).toEqual([undefined, undefined, undefined]);
  });
});
