import {SqrtPipe} from "./sqrt";

describe('SqrtPipe', () => {
  let pipe: SqrtPipe;

  beforeEach(() => {
    pipe = new SqrtPipe();
  });

  it('should return square of given number', () => {
    expect(pipe.transform(9)).toEqual(3);
    expect(pipe.transform(16)).toEqual(4);
    expect(pipe.transform(81)).toEqual(9);
  });
});
