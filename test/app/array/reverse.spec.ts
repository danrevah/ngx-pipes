import {ReversePipe} from "../../../src/app/pipes/array/reverse";

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
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
