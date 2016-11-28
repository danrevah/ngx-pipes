import {IsNotIdenticalToPipe} from "./is-not-identical-to";

describe('IsNotIdenticalToPipe', () => {
  let pipe: IsNotIdenticalToPipe;

  beforeEach(() => {
    pipe = new IsNotIdenticalToPipe();
  });

  it('should check if of given value is not identical to other', () => {
    expect(pipe.transform(1, 1)).toBeFalsy();
    expect(pipe.transform(1, '1')).toBeTruthy();
    expect(pipe.transform(1, 2)).toBeTruthy();
    expect(pipe.transform(2, 1)).toBeTruthy();
  });
});
