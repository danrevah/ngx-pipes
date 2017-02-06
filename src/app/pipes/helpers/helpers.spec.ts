
import {extractDeepPropertyByMapKey} from './helpers';

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

    expect(extractDeepPropertyByMapKey(obj, 'a')).toEqual(1);
    expect(extractDeepPropertyByMapKey(obj, 'b.c')).toEqual(2);
    expect(extractDeepPropertyByMapKey(obj, 'b.d.e')).toEqual(3);
    expect(extractDeepPropertyByMapKey(obj, 'f.g')).toEqual(4);
    expect(extractDeepPropertyByMapKey(obj, 'f.i.j.k.l')).toEqual(6);
    expect(extractDeepPropertyByMapKey(obj, 'f.i.j.k.l.')).toEqual(undefined);
  });
});
