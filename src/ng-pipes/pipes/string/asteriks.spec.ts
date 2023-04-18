import { AsteriksPipe } from './asteriks.pipe';

describe('AsteriksPipe Tests', () => {
  let pipe: AsteriksPipe;

  beforeEach(() => {
    pipe = new AsteriksPipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null,0)).toEqual(null);
    expect(pipe.transform(undefined,0)).toEqual(undefined);
    expect(pipe.transform(42,0)).toEqual(42);
    expect(pipe.transform({ name: 'foo' },0)).toEqual({ name: 'foo' });
  });

  it('Should mask properly', () => {
    expect(pipe.transform('69200775422',2)).toEqual('69*******22');
    expect(pipe.transform('foo_bar',1)).toEqual('f*****r');
    expect(pipe.transform('-dash foo ',3)).toEqual('-da****oo ');
  });
});
