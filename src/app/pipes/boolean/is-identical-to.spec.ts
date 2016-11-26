import {IsIdenticalToPipe} from "./is-identical-to";

describe('IsIdenticalToPipe', () => {
  let pipe: IsIdenticalToPipe;

  beforeEach(() => {
    pipe = new IsIdenticalToPipe();
  });

  it('should check if of given value is identical to other', () => {
    expect(pipe.transform(1, 1)).toBeTruthy();
    expect(pipe.transform(1, '1')).toBeFalsy();
    expect(pipe.transform(1, 2)).toBeFalsy();
    expect(pipe.transform(2, 1)).toBeFalsy();
  });
});
