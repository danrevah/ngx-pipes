import {GroupByPipe} from './group-by';

describe('GroupByPipe', () => {
  let pipe: GroupByPipe;

  beforeEach(() => {
    pipe = new GroupByPipe();
  });


  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('group on discriminator', () => {
    const arrayWithDiscriminator = [{key: 'foo'}, {key: 'bar'}, {key: 'foo'}, {key: 'bar'}];
    const result = pipe.transform(arrayWithDiscriminator, 'key');
    expect(result).toEqual({
      foo: [{key: 'foo'}, {key: 'foo'}],
      bar: [{key: 'bar'}, {key: 'bar'}]
    });
  });
  it('allow function to be used as discriminator', () => {
    const arrayWithDiscriminator = [{key: 'foo'}, {key: 'bar'}, {key: 'foo'}, {key: 'bar'}];
    const result = pipe.transform(arrayWithDiscriminator, _ => _['key']);
    expect(result).toEqual({
      foo: [{key: 'foo'}, {key: 'foo'}],
      bar: [{key: 'bar'}, {key: 'bar'}]
    });
  });
});
