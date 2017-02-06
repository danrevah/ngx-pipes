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
    const result = pipe.transform(arrayWithDiscriminator, (_: any) => _['key']);
    expect(result).toEqual({
      foo: [{key: 'foo'}, {key: 'foo'}],
      bar: [{key: 'bar'}, {key: 'bar'}]
    });
  });

  it('group on multiple discriminator with delimiter', () => {
    const arrayWithDiscriminator = [
      {id: 1, key: 'foo', type: 1},
      {id: 2, key: 'foo', type: 2},
      {id: 3, key: 'foo', type: 1},
      {id: 4, key: 'foo', type: 2}
    ];
    const result = pipe.transform(arrayWithDiscriminator, ['key', 'type'], '_');
    expect(result).toEqual({
      foo_1: [{id: 1, key: 'foo', type: 1}, {id: 3, key: 'foo', type: 1}],
      foo_2: [{id: 2, key: 'foo', type: 2}, {id: 4, key: 'foo', type: 2}]
    });
  });

  it('group on multiple discriminator', () => {
    const arrayWithDiscriminator = [
      {id: 1, key: 'foo', type: 1},
      {id: 2, key: 'foo', type: 2},
      {id: 3, key: 'foo', type: 1},
      {id: 4, key: 'foo', type: 2}
    ];
    const result = pipe.transform(arrayWithDiscriminator, ['key', 'type']);
    expect(result).toEqual({
      'foo|1': [{id: 1, key: 'foo', type: 1}, {id: 3, key: 'foo', type: 1}],
      'foo|2': [{id: 2, key: 'foo', type: 2}, {id: 4, key: 'foo', type: 2}]
    });
  });

  it('group on deep property discriminator', () => {
    const arrayWithDiscriminator = [
      {id: 1, prop: { deep: 'foo' }},
      {id: 2, prop: { deep: 'bar' }},
      {id: 3, prop: { deep: 'foo' }},
      {id: 4, prop: { deep: 'bar' }}
    ];
    const result = pipe.transform(arrayWithDiscriminator, 'prop.deep');
    expect(result).toEqual({
      foo: [{id: 1, prop: { deep: 'foo' }}, {id: 3, prop: { deep: 'foo' }}],
      bar: [{id: 2, prop: { deep: 'bar' }}, {id: 4, prop: { deep: 'bar' }}]
    });
  });

  it('group on multiple deep property discriminator', () => {
    const arrayWithDiscriminator = [
      {id: 1, prop: { deep: 'foo', type: 1 }},
      {id: 2, prop: { deep: 'foo', type: 2 }},
      {id: 3, prop: { deep: 'foo', type: 1 }},
      {id: 4, prop: { deep: 'foo', type: 2 }}
    ];
    const result = pipe.transform(arrayWithDiscriminator, ['prop.deep', 'prop.type']);
    expect(result).toEqual({
      'foo|1': [{id: 1, prop: { deep: 'foo', type: 1 }}, {id: 3, prop: { deep: 'foo', type: 1 }}],
      'foo|2': [{id: 2, prop: { deep: 'foo', type: 2 }}, {id: 4, prop: { deep: 'foo', type: 2 }}]
    });
  });
});
