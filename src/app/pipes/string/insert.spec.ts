import { InsertPipe } from './insert';

describe('InsertPipe', () => {
  let pipe:InsertPipe;

  beforeEach(() => {
    pipe = new InsertPipe();
  });

  fit('Should not do anything if text is not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({name: 'foo'})).toEqual({name: 'foo'});
  });

  fit('should insert chars properly after every character', () => {
    expect(pipe.transform('foobar', '.')).toEqual('f.o.o.b.a.r');
  });

  fit('should do nothing if no chars parameter is passed', () => {
    expect(pipe.transform('foobar')).toEqual('foobar');
  });

});
