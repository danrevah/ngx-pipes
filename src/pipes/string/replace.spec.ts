import { ReplacePipe } from './replace';

describe('ReplacePipe Tests', () => {
  let pipe: ReplacePipe;

  beforeEach(() => {
    pipe = new ReplacePipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null, '', '')).toEqual(null);
    expect(pipe.transform(undefined, '', '')).toEqual(undefined);
    expect(pipe.transform(42, '', '')).toEqual(42);
    expect(pipe.transform({name: 'foo'}, '', '')).toEqual({name: 'foo'});
  });

  it('Should replace _ with a space', () => {
    expect(pipe.transform('Partially_Shipped', '_', ' ')).toEqual('Partially Shipped');
  });

  it('Should perform a global replacement', () => {
    expect(pipe.transform('Mr Blue has a blue house and a blue car', /blue/g, 'red')).toEqual(
      'Mr Blue has a red house and a red car'
    );
  });

  it('Should perform a global case-insensitive replacement', () => {
    expect(pipe.transform('Mr Blue has a blue house and a blue car', /blue/gi, 'red')).toEqual(
      'Mr red has a red house and a red car'
    );
  });

  it('Should be able to use a function to modify the replacement text', () => {
    expect(pipe.transform('Mr Blue has a blue house and a blue car', /blue|house|car/gi, function (x) {
      return x.toUpperCase();
  })).toEqual(
      'Mr BLUE has a BLUE HOUSE and a BLUE CAR'
    );
  });
});
