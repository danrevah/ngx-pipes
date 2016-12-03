import {TailPipe} from './tail';

describe('TailPipe', () => {
  let pipe: TailPipe;

  beforeEach(() => {
    pipe = new TailPipe();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should check that nothing happens if there are no parameters', () => {
    let arr = [1, 2, 3];
    let result = pipe.transform(arr);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should slice properly', () => {
    expect(pipe.transform([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    expect(pipe.transform([1, 2, 3, 4], 3)).toEqual([4]);
  });

  it('should slice properly array of objects', () => {
    let fooObj = {id: 1, name: 'foo'},
        barObj = {id: 2, name: 'bar'},
        cazObj = {id: 3, name: 'caz'};

    expect(pipe.transform([fooObj, barObj, cazObj], 1)).toEqual([barObj, cazObj]);
  });
});
