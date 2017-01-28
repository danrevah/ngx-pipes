import {OrderByPipe} from './order-by';

describe('OrderByPipe', () => {
  const testArray = [
    {id: 1, name: 'John', amount: 1337},
    {id: 2, name: 'Michael', amount: 42},
    {id: 3, name: 'Dan', amount: 1},
    {id: 4, name: 'Dave', amount: 2}
  ];

  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should not do anything in-case of not an array', () => {
    expect(pipe.transform('foo')).toEqual('foo');
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({foo: 1, bar: 2})).toEqual({foo: 1, bar: 2});
  });

  it('should create a new version of the array', () => {
    const arr = [3, 2, 1];
    expect(pipe.transform(arr)).toEqual([1, 2, 3]);
    expect(arr).toEqual([3, 2, 1]);
  });

  it('should order by value if there is no config', () => {
    expect(pipe.transform([3, 2, 1])).toEqual([1, 2, 3]);
    expect(pipe.transform(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
  });

  it('should order by reverse value if there a stringy value of `-`', () => {
    expect(pipe.transform([3, 2, 1], '-')).toEqual([3, 2, 1]);
    expect(pipe.transform(['c', 'b', 'a'], '-')).toEqual(['c', 'b', 'a']);
    expect(pipe.transform([1, 2, 3], '-')).toEqual([3, 2, 1]);
    expect(pipe.transform(['a', 'b', 'c'], '-')).toEqual(['c', 'b', 'a']);
  });

  it('should order by value if there a stringy value of `+`', () => {
    expect(pipe.transform([3, 2, 1], '+')).toEqual([1, 2, 3]);
    expect(pipe.transform(['c', 'b', 'a'], '+')).toEqual(['a', 'b', 'c']);
  });

  it('should order by property if there a stringy value of `+property` or `property`', () => {
    expect(pipe.transform(testArray, 'amount')).toEqual([
      {id: 3, name: 'Dan', amount: 1},
      {id: 4, name: 'Dave', amount: 2},
      {id: 2, name: 'Michael', amount: 42},
      {id: 1, name: 'John', amount: 1337}
    ]);

    expect(pipe.transform(testArray, '+amount')).toEqual([
      {id: 3, name: 'Dan', amount: 1},
      {id: 4, name: 'Dave', amount: 2},
      {id: 2, name: 'Michael', amount: 42},
      {id: 1, name: 'John', amount: 1337}
    ]);
  });

  it('should reverse order by property if there a stringy value of `-property`', () => {
    expect(pipe.transform(testArray, '-amount')).toEqual([
      {id: 1, name: 'John', amount: 1337},
      {id: 2, name: 'Michael', amount: 42},
      {id: 4, name: 'Dave', amount: 2},
      {id: 3, name: 'Dan', amount: 1}
    ]);
  });

  it('should reverse order by multiple properties if there an array values', () => {
    expect(pipe.transform([
      {id: 4, name: 'Dave', amount: 2},
      {id: 2, name: 'Michael', amount: 2},
      {id: 3, name: 'Dan', amount: 1},
      {id: 1, name: 'John', amount: 1}
    ], ['amount', '+id'])).toEqual([
      {id: 1, name: 'John', amount: 1},
      {id: 3, name: 'Dan', amount: 1},
      {id: 2, name: 'Michael', amount: 2},
      {id: 4, name: 'Dave', amount: 2}
    ]);
  });

  it('should reverse order by multiple properties if there an array values', () => {
    expect(pipe.transform([
      {id: 2, name: 'b', amount: 2},
      {id: 2, name: 'a', amount: 2},
      {id: 1, name: 'd', amount: 1},
      {id: 1, name: 'c', amount: 1}
    ], ['amount', '+id', '-name'])).toEqual([
      {id: 1, name: 'd', amount: 1},
      {id: 1, name: 'c', amount: 1},
      {id: 2, name: 'b', amount: 2},
      {id: 2, name: 'a', amount: 2}
    ]);
  });

  it('should order by deep property', () => {
    expect(pipe.transform([
      {id: 1, name: 'John', amount: 1337, deep: {prop: 4}},
      {id: 2, name: 'Michael', amount: 42, deep: {prop: 2}},
      {id: 3, name: 'Dan', amount: 1, deep: {prop: 1}},
      {id: 4, name: 'Dave', amount: 2, deep: {prop: 3}}
    ], ['deep.prop'])).toEqual([
      {id: 3, name: 'Dan', amount: 1, deep: {prop: 1}},
      {id: 2, name: 'Michael', amount: 42, deep: {prop: 2}},
      {id: 4, name: 'Dave', amount: 2, deep: {prop: 3}},
      {id: 1, name: 'John', amount: 1337, deep: {prop: 4}}
    ]);
  });

  it('should order by deep property', () => {
    expect(pipe.transform([
      {id: 1, name: 'John', amount: 1337, deep: {prop: 4}},
      {id: 2, name: 'Michael', amount: 42, deep: {prop: 2}},
      {id: 3, name: 'Dan', amount: 1, deep: {prop: 1}},
      {id: 4, name: 'Dave', amount: 2, deep: {prop: 3}}
    ], ['-deep.prop'])).toEqual([
      {id: 1, name: 'John', amount: 1337, deep: {prop: 4}},
      {id: 4, name: 'Dave', amount: 2, deep: {prop: 3}},
      {id: 2, name: 'Michael', amount: 42, deep: {prop: 2}},
      {id: 3, name: 'Dan', amount: 1, deep: {prop: 1}}
    ]);
  });
});
