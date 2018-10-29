import { AorAnPipe } from "./a-or-an";

describe("AorAnPipe Tests", () => {
  let pipe: AorAnPipe;
  beforeEach(() => {
    pipe = new AorAnPipe();
  });
  describe("Misc. Inputs", () => {
    it('should return "" if passed null', () => {
      expect(pipe.transform(null)).toEqual("" as string);
    });
    it('should return "" if passed undefined', () => {
      expect(pipe.transform(undefined)).toEqual("" as string);
    });
    it('should return "" if passed ""', () => {
      expect(pipe.transform("")).toEqual("" as string);
    });
  });
  describe("Words Prefixed With 'A'", () => {
    it('should return "a cat" when passed "cat"', () => {
      expect(pipe.transform("cat")).toEqual("a cat" as string);
    });
  });
  describe("Words Prefixed With 'An'", () => {
    it('should return "an egg" if passed "egg"', () => {
      expect(pipe.transform("egg")).toEqual("an egg" as string);
    });
    it('should return "an umbrella" if passed "umbrella"', () => {
      expect(pipe.transform("umbrella")).toEqual("an umbrella" as string);
    });
  });
  describe("Multiple Words", () => {
    it('should return "an aubergine from the store" if passed "aubergine from the store"', () => {
      expect(pipe.transform("aubergine from the store")).toEqual("an aubergine from the store" as string);
    });
    it('should return "a cat of many colors" if passed "cat of many colors"', () => {
      expect(pipe.transform("cat of many colors")).toEqual("a cat of many colors" as string);
    });
    it('should return "an M.Sc. from a large public Midwestern university" if passed "M.Sc. from a large public Midwestern university"', () => {
      expect(pipe.transform("M.Sc. from a large public Midwestern university")).toEqual(
        "an M.Sc. from a large public Midwestern university" as string
      );
    });
  });
  describe("Words from the Irregular Group", () => {
    it('should return "an herb" if passed "herb"', () => {
      expect(pipe.transform("herb")).toEqual("an herb" as string);
    });
    it('should return "an honor" if passed "honor"', () => {
      expect(pipe.transform("honor")).toEqual("an honor" as string);
    });
    it('should return "an M.Sc." if passed "M.Sc."', () => {
      expect(pipe.transform("M.Sc.")).toEqual("an M.Sc." as string);
    });
    it('should return "a unicorn" if passed "unicorn"', () => {
      expect(pipe.transform("unicorn")).toEqual("a unicorn" as string);
    });
  });
});
