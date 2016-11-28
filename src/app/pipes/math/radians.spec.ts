import {RadiansPipe} from "./radians";

describe('RadiansPipe', () => {
  let pipe: RadiansPipe;

  beforeEach(() => {
    pipe = new RadiansPipe();
  });

  it('should return degrees of given number in radians', () => {
    expect(pipe.transform(<number>null)).toEqual(NaN);
    expect(pipe.transform(<number>undefined)).toEqual(NaN);
    expect(pipe.transform(90)).toEqual(1.5707963267948966);
    expect(pipe.transform(180)).toEqual(3.141592653589793);
  });
});
