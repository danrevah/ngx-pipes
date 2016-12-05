import {UnderscorePipe} from './underscore';

describe('UnderscorePipe Tests', () => {
  let pipe:UnderscorePipe;

  beforeEach(() => {
    pipe = new UnderscorePipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform({name: 'foo'})).toEqual({name: 'foo'});
  });

  it('Should transform from camelCase to underscore properly', () => {
    expect(pipe.transform('fooBar')).toEqual('foo_bar');
    expect(pipe.transform('FooBar')).toEqual('foo_bar');
    expect(pipe.transform('AngularIsAwesome')).toEqual('angular_is_awesome');
  });
});
