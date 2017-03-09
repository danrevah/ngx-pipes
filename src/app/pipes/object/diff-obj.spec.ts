import {DiffObjPipe} from './diff-obj';

describe('DiffObj Pipe', () => {
  let pipe: DiffObjPipe;

  beforeEach(() => {
    pipe = new DiffObjPipe();
  });

  it('should keep the element the same way if its not an object', () => {
    expect(pipe.transform([1, 2, 3], {})).toEqual({});
    expect(pipe.transform([], {})).toEqual({});
    expect(pipe.transform('foo', {})).toEqual({});
    expect(pipe.transform(null, {})).toEqual({});
    expect(pipe.transform(undefined, {})).toEqual({});
  });

  it('should return an empty object when there is no difference', () => {
    expect(pipe.transform({}, {})).toEqual({});
    expect(pipe.transform({a: 1}, {a: 1})).toEqual({});
    expect(pipe.transform({a: {b: 1}, c: 3}, {a: {b: 1}, c: 3})).toEqual({});
  });

  it('should return a diff object', () => {
    expect(pipe.transform({a: 1}, {a: 2})).toEqual({a: 1});
    expect(pipe.transform({a: 1, b: 1}, {a: 1, b: 2})).toEqual({b: 1});
    expect(pipe.transform({a: 1, b: true}, {a: 1, b: 2})).toEqual({b: true});
    expect(pipe.transform({a: 1, b: {c: 1}}, {a: 1, b: {c: 2}})).toEqual({b: {c: 1}});
  });
});
