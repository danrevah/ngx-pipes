import {StripTagsPipe} from "./strip-tags";

describe('StripTagsPipe Tests', () => {
  let pipe:StripTagsPipe;

  beforeEach(() => {
    pipe = new StripTagsPipe();
  });

  it('Should strip tags', () => {
    expect(pipe.transform('<a href="">foo</a>')).toEqual('foo');
    expect(pipe.transform('<p class="foo">bar</p>')).toEqual('bar');
  });

  it('Should strip tags only tags which are not allowed', () => {
    expect(pipe.transform('<a href="">foo</a><p class="foo">bar</p>', 'p')).toEqual('foo<p class="foo">bar</p>');
    expect(pipe.transform('<a href="">foo</a><p class="foo">bar</p>', 'a')).toEqual('<a href="">foo</a>bar');
    expect(pipe.transform('<a href="">foo</a><p class="foo">bar</p>', 'p', 'a')).toEqual('<a href="">foo</a><p class="foo">bar</p>');
  });
});
