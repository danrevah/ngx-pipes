import {LatinisePipe} from './latinise';

describe('LatinisePipe Tests', () => {
  let pipe:LatinisePipe;

  beforeEach(() => {
    pipe = new LatinisePipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({name: 'foo'})).toEqual({name: 'foo'});
  });

  it('Should latinise properly', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform('Féé')).toEqual('Fee');
    expect(pipe.transform('ÁĂẤ')).toEqual('AAA');
  });
});
