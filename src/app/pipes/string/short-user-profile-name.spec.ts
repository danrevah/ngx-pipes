import { ShortUserProfileNamePipe } from './short-user-profile-name';

describe('ShortUserProfileNamePipe Tests', () => {
  let pipe:ShortUserProfileNamePipe;

  beforeEach(() => {
    pipe = new ShortUserProfileNamePipe();
  });

  it('Should return two charecters from string of user name', () => {
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('Foo')).toEqual('FO');
    expect(pipe.transform('Foo Bar')).toEqual('FB');
    expect(pipe.transform('Foo Bar Joe')).toEqual('FJ');
  });
});
