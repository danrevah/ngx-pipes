import { Pipe, PipeTransform } from "@angular/core";
import { isVowel } from "../helpers/helpers";

@Pipe({
  name: "make-plural-string",
})

/**
 * Takes a singular entity string and pluralizes it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is pluralized -- this
 * means that if "your story" was passed in, "your stories" would be passed out.
 * @constructor
 * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
 * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
 *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
 *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
 */
export class MakePluralStringPipe implements PipeTransform {
  private irregularMap: any = {
    addendum: "addenda",
    alga: "algae",
    alumna: "alumnae",
    alumnus: "alumni",
    analysis: "analyses",
    antenna: "antennae",
    appendix: "appendices",
    aquarium: "aquaria",
    arch: "arches",
    axe: "axes",
    axis: "axes",
    bacillus: "bacilli",
    bacterium: "bacteria",
    basis: "bases",
    batch: "batches",
    beach: "beaches",
    beau: "beaux",
    bison: "bison",
    brush: "brushes",
    buffalo: "buffaloes",
    bureau: "bureaus",
    bus: "busses",
    cactus: "cacti",
    calf: "calves",
    chateau: "chateaux",
    cherry: "cherries",
    child: "children",
    church: "churches",
    circus: "circuses",
    cod: "cod",
    corps: "corps",
    corpus: "corpora",
    crisis: "crises",
    criterion: "criteria",
    curriculum: "curricula",
    datum: "data",
    deer: "deer",
    diagnosis: "diagnoses",
    die: "dice",
    domino: "dominoes",
    dwarf: "dwarves",
    echo: "echoes",
    elf: "elves",
    ellipsis: "ellipses",
    embargo: "embargoes",
    emphasis: "emphases",
    erratum: "errata",
    fax: "faxes",
    fireman: "firemen",
    fish: "fish",
    flush: "flushes",
    focus: "foci",
    foot: "feet",
    formula: "formulas",
    fungus: "fungi",
    genus: "genera",
    goose: "geese",
    grafito: "grafiti",
    half: "halves",
    hero: "heroes",
    hoax: "hoaxes",
    hoof: "hooves",
    hypothesis: "hypotheses",
    index: "indices",
    kiss: "kisses",
    knife: "knives",
    leaf: "leaves",
    life: "lives",
    loaf: "loaves",
    louse: "lice",
    man: "men",
    mango: "mangoes",
    matrix: "matrices",
    means: "means",
    medium: "media",
    memorandum: "memoranda",
    millennium: "milennia",
    moose: "moose",
    mosquito: "mosquitoes",
    motto: "mottoes",
    mouse: "mice",
    nebula: "nebulae",
    neurosis: "neuroses",
    nucleus: "nuclei",
    oasis: "oases",
    octopus: "octopodes",
    ovum: "ova",
    ox: "oxen",
    paralysis: "paralyses",
    parenthesis: "parentheses",
    person: "people",
    phenomenon: "phenomena",
    plateau: "plateaux",
    potato: "potatoes",
    quiz: "quizzes",
    radius: "radii",
    reflex: "reflexes",
    "runner-up": "runners-up",
    scampo: "scampi",
    scarf: "scarves",
    scissors: "scissors",
    scratch: "scratches",
    self: "selves",
    series: "series",
    sheaf: "sheaves",
    sheep: "sheep",
    shelf: "shelves",
    "son-in-law": "sons-in-law",
    species: "species",
    splash: "splashes",
    stimulus: "stimuli",
    stitch: "stitches",
    stratum: "strata",
    syllabus: "syllabi",
    symposium: "symposia",
    synopsis: "synopses",
    synthesis: "syntheses",
    tableau: "tableaux",
    tax: "taxes",
    that: "those",
    thesis: "theses",
    thief: "thieves",
    this: "these",
    tomato: "tomatoes",
    tooth: "teeth",
    tornado: "tornadoes",
    torpedo: "torpedoes",
    vertebra: "vertebrae",
    veto: "vetoes",
    vita: "vitae",
    volcano: "volcanoes",
    waltz: "waltzes",
    wash: "washes",
    watch: "watches",
    wharf: "wharves",
    wife: "wives",
    wolf: "wolves",
    woman: "women",
    zero: "zeroes",
  };

  transform(singularEntity: string, quantity: number = 0): string {
    if (!singularEntity || singularEntity === "") {
      return "";
    }

    if (quantity === 1) {
      return singularEntity;
    } else {
      const lastWord = singularEntity.trim().split(" ")[singularEntity.trim().split(" ").length - 1];
      if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
        if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
          return singularEntity.replace(
            lastWord,
            this.irregularMap[lastWord.toLocaleLowerCase()].replace(
              this.irregularMap[lastWord.toLocaleLowerCase()][0],
              this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()
            )
          );
        }

        return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
      } else if (lastWord[lastWord.length - 1] === "y") {
        // Naive approach:
        // consonant+y = word - 'y' +'ies'
        // vowel+y = word + 's'

        return isVowel(lastWord[lastWord.length - 2])
          ? singularEntity + "s"
          : singularEntity.replace(lastWord, lastWord.slice(0, -1) + "ies");
      } else if (lastWord[lastWord.length - 1] === "s") {
        return singularEntity + "es";
      } else {
        return singularEntity + "s";
      }
    }
  }
}
