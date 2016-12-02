import {ReversePipe} from "./reverse";

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should not do anything when not an array or string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should reverse array', () => {
    let array = [1,2,3,4,5];
    let result = pipe.transform(array);
    expect(result).toEqual([5,4,3,2,1]);
  });

  it('should reverse array of objects', () => {
    let fooObj = {id: 1, name: 'foo'},
        barObj = {id: 2, name: 'bar'},
        cazObj = {id: 3, name: 'caz'};

    let array = [
      fooObj,
      barObj,
      cazObj
    ];
    let result = pipe.transform(array);
    expect(result).toEqual([
      cazObj, barObj, fooObj
    ]);
  });

  it('should reverse string', () => {
    let string = 'lorem ipsum';
    let result = pipe.transform(string);
    expect(result).toEqual('muspi merol');
  });
});
