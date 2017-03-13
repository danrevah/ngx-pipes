
import {extractDeepPropertyByMapKey, isDeepEqual} from './helpers';

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

  it('should deep equal properly', () => {
    expect(isDeepEqual({a: 1}, {a: 1})).toBeTruthy();
    expect(isDeepEqual({a: 1}, {b: 1})).toBeFalsy();
    expect(isDeepEqual({a: 1}, {a: 1, b: 1})).toBeFalsy();
    expect(isDeepEqual({a: 1, b: 2}, {a: 1, b: 2})).toBeTruthy();
    expect(isDeepEqual({a: 1, b: 2}, {a: 1, b: 1})).toBeFalsy();
    expect(isDeepEqual({a: 1, b: 2, c: {d: 3}}, {a: 1, b: 2, c: {d: 1}})).toBeFalsy();
    expect(isDeepEqual({a: 1, b: 2, c: {d: 3}}, {a: 1, b: 2, c: {d: 3}})).toBeTruthy();
    expect(isDeepEqual({a: 1, b: 2, c: {d: 3}}, {a: 1, b: 2, c: {d: {}}})).toBeFalsy();
  });
});
