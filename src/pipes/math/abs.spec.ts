import { AbsPipe } from "./abs";

describe("AbsPipe", () => {
  let pipe: AbsPipe;

  beforeEach(() => {
    pipe = new AbsPipe();
  });

  it("should return abs of given number", () => {
    expect(pipe.transform(5)).toEqual(5);
    expect(pipe.transform(-5)).toEqual(5);
    expect(pipe.transform(0)).toEqual(0);
  });
});
