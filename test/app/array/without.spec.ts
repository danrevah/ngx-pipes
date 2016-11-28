import {WithoutPipe} from "../../../src/app/pipes/array/without";

describe('WithoutPipe', () => {
  let pipe: WithoutPipe;

  beforeEach(() => {
    pipe = new WithoutPipe();
  });

  it('should keep the array the same way if it doesn\'t have any without arguments', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([1, 2, 3]);
    expect(pipe.transform([1, 2, 3, {id: 1}])).toEqual([1, 2, 3, {id: 1}]);
  });

  it('should return an array without the one specified in the arguments', () => {
    expect(pipe.transform([1, 2, 3, 1, 2, 3], [1])).toEqual([2, 3, 2, 3]);
    expect(pipe.transform([1, 2, 3, 1, 2, 3], [1, 3])).toEqual([2, 2]);
  });
});
