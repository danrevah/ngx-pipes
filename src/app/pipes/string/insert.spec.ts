import { InsertPipe } from './insert';

describe('InsertPipe', () => {
  let pipe: InsertPipe;

  beforeEach(() => {
    pipe = new InsertPipe();
  });

  it('Should not do anything if text is not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({ name: 'foo' })).toEqual({ name: 'foo' });
  });

  fit('Should use stepSize of 1 if stepSize is invalid', () => {
    expect(pipe.transform('foobar', '-', 'hello')).toEqual('f-o-o-b-a-r');
    expect(pipe.transform('foobar', '-', -1)).toEqual('f-o-o-b-a-r');
  });

  it('should do nothing if no chars parameter is passed', () => {
    expect(pipe.transform('foobar')).toEqual('foobar');
  });

  it('should insert chars properly', () => {
    expect(pipe.transform('foobar', '.')).toEqual('f.o.o.b.a.r');
    expect(pipe.transform('foobar with stepsize', '#', 3)).toEqual('foo#bar# wi#th #ste#psi#ze');
  });

});
