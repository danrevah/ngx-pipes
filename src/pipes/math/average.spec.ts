import { AveragePipe } from "./average";

describe("AveragePipe", () => {
  let pipe: AveragePipe;

  beforeEach(() => {
    pipe = new AveragePipe();
  });

  it("should return value if not an array", () => {
    expect(pipe.transform({a: 1})).toEqual({a: 1});
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it("should return the average of values", () => {
    expect(pipe.transform([0, 10])).toEqual(5);
    expect(pipe.transform([1, 2])).toEqual(1.5);
    expect(pipe.transform([-1, 1])).toEqual(0);
    expect(pipe.transform([-1, -2])).toEqual(-1.5);
  });

  it("should return NaN for an empty array", () => {
    expect(pipe.transform([])).toBeNaN();
  });
});
