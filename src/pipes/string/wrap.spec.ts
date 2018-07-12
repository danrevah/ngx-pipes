import { WrapPipe } from './wrap';

describe('WrapPipe Tests', () => {
  let pipe: WrapPipe;

  beforeEach(() => {
    pipe = new WrapPipe();
  });

  it('Should not do anything if main text is not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42 as any)).toEqual(42 as any);
    expect(pipe.transform({name: 'foo'} as any)).toEqual({name: 'foo'} as any);
  });

  it('Should skip the prefix if prefix text is not a string', () => {
    expect(pipe.transform('main text', undefined)).toEqual('main text');
    expect(pipe.transform('main text', undefined)).toEqual('main text');
    expect(pipe.transform('main text', 42 as any)).toEqual('main text');
    expect(pipe.transform('main text', {name: 'foo'} as any)).toEqual('main text');
  });

  it('Should skip the suffix if suffix text is not a string', () => {
    expect(pipe.transform('main text', 'great prefix ', undefined)).toEqual('great prefix main text');
    expect(pipe.transform('main text', 'great prefix ', undefined)).toEqual('great prefix main text');
    expect(pipe.transform('main text', 'great prefix ', 42 as any)).toEqual('great prefix main text');
    expect(pipe.transform('main text', 'great prefix ', {name: 'foo'} as any)).toEqual('great prefix main text');
  });

  it('Should wrap properly', () => {
    expect(pipe.transform('main text')).toEqual('main text');
    expect(pipe.transform('main text', 'great prefix ', ' awesome suffix')).toEqual('great prefix main text awesome suffix');
    expect(pipe.transform('main text', 'only prefix ')).toEqual('only prefix main text');
    expect(pipe.transform('main text', undefined, ' only suffix')).toEqual('main text only suffix');
  });
});
