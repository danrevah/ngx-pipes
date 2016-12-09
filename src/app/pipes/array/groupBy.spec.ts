import { GroupByPipe } from './groupBy';

describe('Pipe: GroupBy', () => {
  it('create an instance', () => {
    let pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });

});
describe('GroupByPipe', () => {
  let pipe: GroupByPipe;

  beforeEach(() => {
    pipe = new GroupByPipe();
  });

  it('should not change anything if not array', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({ foo: 1, bar: 2 })).toEqual({ foo: 1, bar: 2 });
  });

  it('group on discriminator', () => {
    let arrayWithDiscriminator = [
      {
        key: 'value0'
      },
      {
        key: 'value1'
      },
      {
        key: 'value0'
      },
      {
        key: 'value1'
      }
    ];
    let result = pipe.transform(arrayWithDiscriminator, 'key');
    expect(result).toEqual([ [ 'value0', [ { key: 'value0' }, { key: 'value0' }] ], [ 'value1', [ { key: 'value1' }, { key: 'value1' }] ] ]);
  });
  it('allow function to be used as discriminator', () => {
    let arrayWithDiscriminator = [
      {
        key: 'value0'
      },
      {
        key: 'value1'
      },
      {
        key: 'value0'
      },
      {
        key: 'value1'
      }
    ];
    let result = pipe.transform(arrayWithDiscriminator, (instance: any) => { return instance[ 'key' ] });
    expect(result).toEqual([ [ 'value0', [ { key: 'value0' }, { key: 'value0' }] ], [ 'value1', [ { key: 'value1' }, { key: 'value1' }] ] ]);
  });
});
