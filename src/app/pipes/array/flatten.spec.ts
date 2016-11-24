import {FlattenPipe} from "./flatten";

describe('FlattenPipe', () => {
  let pipe: FlattenPipe;

  beforeEach(() => {
    pipe = new FlattenPipe();
  });

  it('should deep flatten array', () => {
    let deepArray = [1,2,3,[4,5,6,[7,8,9],[10,11,12,13,[14],[15],[16, [17]]]]];
    let result = pipe.transform(deepArray);
    expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
  });

  it('should shallow flatten array', () => {
    let deepArray = [1,2,3,[4,5,6,[7,8,9],[10,11,12,13,[14],[15],[16, [17]]]]];
    let result = pipe.transform(deepArray,[true]);
    expect(result).toEqual([1,2,3,4,5,6,[7,8,9],[10,11,12,13,[14],[15],[16, [17]]]]);
  });
});
