import {ScanPipe} from "./scan";

describe('ScanPipe Tests', () => {
  let pipe:ScanPipe;

  beforeEach(() => {
    pipe = new ScanPipe();
  });

  it('should keep the string identical', () => {
    expect(pipe.transform('Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
  });

  it('should switch the variables properly', () => {
    expect(pipe.transform('Lorem ipsum {0} sit amet {1}', ['foo', 'bar'])).toEqual('Lorem ipsum foo sit amet bar');
    expect(pipe.transform('Lorem ipsum {1} sit amet {0}', ['bar', 'foo'])).toEqual('Lorem ipsum foo sit amet bar');
    expect(pipe.transform('Lorem ipsum {0}{0} sit amet {0}{1}', ['foo', 'bar'])).toEqual('Lorem ipsum foofoo sit amet foobar');
  });

  it('should keep missing variables', () => {
    expect(pipe.transform('Lorem ipsum {0} sit amet {1}{2}', ['foo', 'bar'])).toEqual('Lorem ipsum foo sit amet bar{2}');
    expect(pipe.transform('Lorem ipsum {1} sit amet {0}{2}{3}', ['foo', 'bar'])).toEqual('Lorem ipsum bar sit amet foo{2}{3}');
  });
});
