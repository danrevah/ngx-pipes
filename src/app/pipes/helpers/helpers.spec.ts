import GeneralHelper from './helpers';

describe('Utils Tests', () => {

  it('should extract properties properly', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      },
      f: {
        g: 4,
        h: 5,
        i: {
          j: {
            k: {
              l: 6
            }
          }
        }
      }
    };

    expect(GeneralHelper.extractDeepPropertyByMapKey(obj, 'a')).toEqual(1);
    expect(GeneralHelper.extractDeepPropertyByMapKey(obj, 'b.c')).toEqual(2);
    expect(GeneralHelper.extractDeepPropertyByMapKey(obj, 'b.d.e')).toEqual(3);
    expect(GeneralHelper.extractDeepPropertyByMapKey(obj, 'f.g')).toEqual(4);
    expect(GeneralHelper.extractDeepPropertyByMapKey(obj, 'f.i.j.k.l')).toEqual(6);
    expect(GeneralHelper.extractDeepPropertyByMapKey(obj, 'f.i.j.k.l.')).toEqual(undefined);
  });
});
