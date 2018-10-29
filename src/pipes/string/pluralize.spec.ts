import { MakePluralStringPipe } from "./pluralize";

describe("MakePluralStringPipe Tests", () => {
  let pipe: MakePluralStringPipe;

  beforeEach(() => {
    pipe = new MakePluralStringPipe();
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

  describe("Naive Transformations of One Word", () => {
    it("should return a plural when naively-transforming a singular entity", () => {
      expect(pipe.transform("Flippy-Floop")).toEqual("Flippy-Floops" as string);
    });

    it('should return a plural when naively-transforming a singular entity that ends in "y"', () => {
      expect(pipe.transform("Flippy-Flappy")).toEqual("Flippy-Flappies" as string);
    });

    it('should return a plural when naively-transforming a singular entity that ends in "s"', () => {
      expect(pipe.transform("Lens")).toEqual("Lenses" as string);
    });

    it("should return a singular entity when naively-transforming an explicitly-singular entity", () => {
      expect(pipe.transform("Flippy-Flappy", 1)).toEqual("Flippy-Flappy" as string);
    });
  });

  describe("Naive Transformations of Two-Word Entities", () => {
    it("should return a plural when naively-transforming a two-word singular entity", () => {
      expect(pipe.transform("Flippy Floop")).toEqual("Flippy Floops" as string);
    });

    it('should return a plural when naively-transforming a two-word singular entity that ends in "s"', () => {
      expect(pipe.transform("Lost Lens")).toEqual("Lost Lenses" as string);
    });
    it('should return a plural when naively-transforming a two-word singular entity that ends in "y"', () => {
      expect(pipe.transform("Flippy Flappy")).toEqual("Flippy Flappies" as string);
    });

    it("should return a singular entity when naively-transforming a two-word explicitly-singular entity", () => {
      expect(pipe.transform("Flippy Flappy", 1)).toEqual("Flippy Flappy" as string);
    });
  });

  describe('Using English-language rules for words ending in "y"', () => {
    it('should return "days" if passed "day"', () => {
      expect(pipe.transform("day")).toEqual("days" as string);
    });

    it('should return "day" if passed "day" and 1', () => {
      expect(pipe.transform("day", 1)).toEqual("day" as string);
    });

    it('should return "days" if passed "day" and 99', () => {
      expect(pipe.transform("day", 99)).toEqual("days" as string);
    });

    it('should return "Days" if passed "Day" and 99', () => {
      expect(pipe.transform("Day", 99)).toEqual("Days" as string);
    });

    it('should return "monasteries" if passed "monastery"', () => {
      expect(pipe.transform("monastery")).toEqual("monasteries" as string);
    });

    it('should return "monastery" if passed "monastery" and 1', () => {
      expect(pipe.transform("monastery", 1)).toEqual("monastery" as string);
    });

    it('should return "monasteries" if passed "monastery" and 99', () => {
      expect(pipe.transform("monastery", 99)).toEqual("monasteries" as string);
    });

    it('should return "spies" if passed "spy"', () => {
      expect(pipe.transform("spy")).toEqual("spies" as string);
    });

    it('should return "spy" if passed "spy" and 1', () => {
      expect(pipe.transform("spy", 1)).toEqual("spy" as string);
    });

    it('should return "spies" if passed "spy" and 99', () => {
      expect(pipe.transform("spy", 99)).toEqual("spies" as string);
    });
  });

  describe("Using Known Irregular Words", () => {
    it('should return "Octopodes" if passed "Octopus"', () => {
      expect(pipe.transform("Octopus")).toEqual("Octopodes");
    });

    it('should return "octopodes" if passed "octopus"', () => {
      expect(pipe.transform("octopus")).toEqual("octopodes");
    });

    it('should return "Octopus" if passed "Octopus" and 1', () => {
      expect(pipe.transform("Octopus", 1)).toEqual("Octopus");
    });

    it('should return "octopus" if passed "octopus" and 1', () => {
      expect(pipe.transform("octopus", 1)).toEqual("octopus");
    });

    it('should return "One Octopus" if passed "One Octopus" and 1', () => {
      expect(pipe.transform("One Octopus", 1)).toEqual("One Octopus");
    });

    it('should return "Four Octopodes" if passed "Four Octopus" and 4', () => {
      expect(pipe.transform("Four Octopus", 4)).toEqual("Four Octopodes");
    });
  });
});
